import 'server-only'

export type SpotifyTrack = {
  album: string
  albumImageUrl: string | null
  artist: string
  isPlaying: boolean
  title: string
  trackUrl: string
}

type SpotifyApiTrack = {
  album?: { images?: Array<{ url?: string }>; name?: string }
  artists?: Array<{ name?: string }>
  external_urls?: { spotify?: string }
  name?: string
  type?: string
}

const TOKEN_URL = 'https://accounts.spotify.com/api/token'
const API_URL = 'https://api.spotify.com/v1/me/player'
let cachedAccessToken: { expiresAt: number; value: string } | null = null

function credentials() {
  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

  return clientId && clientSecret && refreshToken
    ? { clientId, clientSecret, refreshToken }
    : null
}

async function getAccessToken() {
  if (cachedAccessToken && cachedAccessToken.expiresAt > Date.now()) {
    return cachedAccessToken.value
  }

  const values = credentials()
  if (!values) return null

  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${values.clientId}:${values.clientSecret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: values.refreshToken,
    }),
    cache: 'no-store',
  })

  if (!response.ok) return null
  const data = (await response.json()) as { access_token?: string; expires_in?: number }
  if (!data.access_token) return null

  cachedAccessToken = {
    value: data.access_token,
    expiresAt: Date.now() + Math.max((data.expires_in ?? 3600) - 60, 0) * 1000,
  }
  return cachedAccessToken.value
}

function normalizeTrack(track: SpotifyApiTrack | null | undefined, isPlaying: boolean): SpotifyTrack | null {
  if (!track || track.type !== 'track' || !track.name || !track.external_urls?.spotify) return null

  const artist = track.artists?.map(({ name }) => name).filter(Boolean).join(', ')
  if (!artist) return null

  return {
    album: track.album?.name ?? 'Unknown album',
    albumImageUrl: track.album?.images?.[0]?.url ?? null,
    artist,
    isPlaying,
    title: track.name,
    trackUrl: track.external_urls.spotify,
  }
}

export async function getSpotifyStatus(): Promise<SpotifyTrack | null> {
  try {
    const accessToken = await getAccessToken()
    if (!accessToken) return null

    const headers = { Authorization: `Bearer ${accessToken}` }
    const currentResponse = await fetch(`${API_URL}/currently-playing`, {
      headers,
      cache: 'no-store',
    })

    if (currentResponse.status !== 204) {
      if (!currentResponse.ok) return null
      const current = (await currentResponse.json()) as {
        is_playing?: boolean
        item?: SpotifyApiTrack | null
      }
      if (current.is_playing) {
        const track = normalizeTrack(current.item, true)
        if (track) return track
      }
    }

    const recentResponse = await fetch(`${API_URL}/recently-played?limit=1`, {
      headers,
      cache: 'no-store',
    })
    if (!recentResponse.ok) return null

    const recent = (await recentResponse.json()) as {
      items?: Array<{ track?: SpotifyApiTrack }>
    }
    return normalizeTrack(recent.items?.[0]?.track, false)
  } catch {
    return null
  }
}
