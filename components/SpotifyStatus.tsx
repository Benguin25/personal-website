'use client'

import { useEffect, useState } from 'react'
import type { SpotifyTrack } from '@/lib/spotify'

function SpotifyMark() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm5.5 17.3a.75.75 0 0 1-1.03.25c-2.82-1.73-6.38-2.12-10.57-1.16a.75.75 0 1 1-.33-1.46c4.58-1.05 8.51-.6 11.69 1.34.35.22.46.68.24 1.03Zm1.47-3.26a.94.94 0 0 1-1.29.31c-3.23-1.98-8.16-2.55-11.98-1.39a.94.94 0 1 1-.55-1.79c4.37-1.33 9.8-.69 13.51 1.58.44.27.58.85.31 1.29Zm.13-3.4C15.22 8.34 8.83 8.12 5.13 9.25a1.12 1.12 0 1 1-.65-2.14c4.25-1.29 11.31-1.03 15.76 1.61a1.12 1.12 0 0 1-1.14 1.92Z" />
    </svg>
  )
}

function Equalizer() {
  return (
    <span className="spotify-equalizer" aria-label="Playing now" role="img">
      <span /><span /><span />
    </span>
  )
}

export function SpotifyStatus() {
  const [track, setTrack] = useState<SpotifyTrack | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()
    fetch('/api/spotify', { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((data: SpotifyTrack | null) => setTrack(data))
      .catch(() => undefined)
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [])

  if (loading) {
    return <div className="h-[118px] animate-pulse rounded-xl border border-white/[0.08] bg-zinc-950" aria-label="Loading Spotify status" />
  }

  if (!track) {
    return (
      <div className="flex min-h-[118px] items-center gap-4 rounded-xl border border-white/[0.08] bg-zinc-950 px-5 py-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-zinc-600"><SpotifyMark /></div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600">Spotify</p>
          <p className="mt-1 text-sm text-zinc-400">Listening status is unavailable right now.</p>
        </div>
      </div>
    )
  }

  return (
    <a href={track.trackUrl} target="_blank" rel="noopener noreferrer" className="group flex min-w-0 items-center gap-4 rounded-xl border border-white/[0.08] bg-zinc-950 px-4 py-4 transition-colors hover:border-white/[0.16] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">
      {track.albumImageUrl ? (
        // Spotify artwork is supplied by the API at runtime, so a native image avoids a broad remote host allowlist.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={track.albumImageUrl} alt={`${track.album} album artwork`} className="h-[86px] w-[86px] shrink-0 rounded-lg object-cover" />
      ) : (
        <div className="flex h-[86px] w-[86px] shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-zinc-600"><SpotifyMark /></div>
      )}
      <div className="min-w-0 flex-1">
        <div className="mb-2 flex items-center gap-2 text-[#1ed760]">
          <SpotifyMark />
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em]">{track.isPlaying ? 'Now Playing' : 'Recently Played'}</span>
          {track.isPlaying && <Equalizer />}
        </div>
        <p className="truncate font-semibold text-zinc-100 transition-colors group-hover:text-white">{track.title}</p>
        <p className="mt-1 truncate text-sm text-zinc-500">{track.artist}</p>
      </div>
      <svg aria-hidden="true" className="h-4 w-4 shrink-0 text-zinc-700 transition-colors group-hover:text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 17 17 7M8 7h9v9" /></svg>
    </a>
  )
}
