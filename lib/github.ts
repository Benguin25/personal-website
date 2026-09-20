import 'server-only'

export type ContributionDay = {
  contributionCount: number
  date: string
  weekday: number
}

export type GitHubContributions = {
  totalContributions: number
  username: string
  weeks: Array<{ contributionDays: ContributionDay[] }>
}

type GitHubResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          totalContributions?: number
          weeks?: Array<{ contributionDays?: ContributionDay[] }>
        }
      }
    }
  }
  errors?: unknown[]
}

const QUERY = `
  query Contributions($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              weekday
            }
          }
        }
      }
    }
  }
`

export async function getGitHubContributions(): Promise<GitHubContributions | null> {
  const token = process.env.GITHUB_TOKEN
  const username = process.env.GITHUB_USERNAME || 'Benguin25'
  if (!token) return null

  const to = new Date()
  const from = new Date(to)
  from.setUTCFullYear(from.getUTCFullYear() - 1)

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Benguin25-personal-website',
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { username, from: from.toISOString(), to: to.toISOString() },
      }),
      next: { revalidate: 3600 },
    })

    if (!response.ok) return null
    const payload = (await response.json()) as GitHubResponse
    const calendar = payload.data?.user?.contributionsCollection?.contributionCalendar
    if (payload.errors?.length || !calendar?.weeks || typeof calendar.totalContributions !== 'number') {
      return null
    }

    return {
      totalContributions: calendar.totalContributions,
      username,
      weeks: calendar.weeks.map((week) => ({ contributionDays: week.contributionDays ?? [] })),
    }
  } catch {
    return null
  }
}
