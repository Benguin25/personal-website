import { NextResponse } from 'next/server'
import { getGitHubContributions } from '@/lib/github'

export async function GET() {
  const contributions = await getGitHubContributions()
  return NextResponse.json(contributions, {
    status: contributions ? 200 : 503,
    headers: {
      'Cache-Control': contributions
        ? 'public, s-maxage=3600, stale-while-revalidate=86400'
        : 'private, no-store',
    },
  })
}
