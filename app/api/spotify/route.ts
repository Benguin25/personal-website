import { NextResponse } from 'next/server'
import { getSpotifyStatus } from '@/lib/spotify'

export const dynamic = 'force-dynamic'

export async function GET() {
  const track = await getSpotifyStatus()
  return NextResponse.json(track, {
    status: track ? 200 : 503,
    headers: { 'Cache-Control': 'private, no-store' },
  })
}
