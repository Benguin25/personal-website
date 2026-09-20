'use client'

import { useEffect, useMemo, useState } from 'react'
import type { ContributionDay, GitHubContributions } from '@/lib/github'

const PROFILE_URL = 'https://github.com/Benguin25'
const levelClasses = ['bg-zinc-900', 'bg-emerald-950', 'bg-emerald-800', 'bg-emerald-600', 'bg-emerald-400']

function contributionLevel(count: number, max: number) {
  if (!count) return 0
  return Math.max(1, Math.ceil((count / Math.max(max, 1)) * 4))
}

function labelFor(day: ContributionDay) {
  return `${day.contributionCount} contribution${day.contributionCount === 1 ? '' : 's'} on ${new Date(`${day.date}T12:00:00Z`).toLocaleDateString('en-CA', { dateStyle: 'long', timeZone: 'UTC' })}`
}

export function GitHubActivity() {
  const [data, setData] = useState<GitHubContributions | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()
    fetch('/api/github', { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : null))
      .then((result: GitHubContributions | null) => setData(result))
      .catch(() => undefined)
      .finally(() => setLoading(false))
    return () => controller.abort()
  }, [])

  const max = useMemo(() => data ? Math.max(...data.weeks.flatMap((week) => week.contributionDays.map((day) => day.contributionCount)), 1) : 1, [data])

  return (
    <section aria-labelledby="github-activity-heading">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <span className="section-label">Open source</span>
          <h2 id="github-activity-heading" className="text-2xl font-semibold text-white sm:text-3xl">GitHub Activity</h2>
        </div>
        <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 transition-colors hover:text-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">@Benguin25 <span aria-hidden="true">↗</span></a>
      </div>

      <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-white/[0.08] bg-zinc-950 p-4 transition-colors hover:border-white/[0.16] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 sm:p-5">
        {loading ? (
          <div className="h-40 animate-pulse rounded-lg bg-white/[0.025]" aria-label="Loading GitHub activity" />
        ) : data ? (
          <>
            <p className="mb-4 text-sm text-zinc-400"><span className="font-semibold text-zinc-200">{data.totalContributions.toLocaleString()}</span> contributions in the last year</p>
            <div className="overflow-x-auto pb-2" role="img" aria-label={`${data.totalContributions} GitHub contributions in the last year`}>
              <div className="min-w-[750px]">
                <div className="mb-2 flex gap-[3px] pl-7 text-[10px] text-zinc-600" aria-hidden="true">
                  {data.weeks.map((week, index) => {
                    const firstOfMonth = week.contributionDays.find((day) => Number(day.date.slice(8, 10)) <= 7)
                    return <span key={index} className="w-3 shrink-0">{firstOfMonth ? new Date(`${firstOfMonth.date}T12:00:00Z`).toLocaleDateString('en', { month: 'short', timeZone: 'UTC' }) : ''}</span>
                  })}
                </div>
                <div className="flex items-start gap-2">
                  <div className="grid grid-rows-7 gap-[3px] pt-[15px] text-[10px] leading-3 text-zinc-600" aria-hidden="true"><span /><span>Mon</span><span /><span>Wed</span><span /><span>Fri</span><span /></div>
                  <div className="flex gap-[3px]">
                    {data.weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="grid grid-rows-7 gap-[3px]">
                        {Array.from({ length: 7 }, (_, weekday) => {
                          const day = week.contributionDays.find((item) => item.weekday === weekday)
                          return day ? <span key={day.date} title={labelFor(day)} aria-label={labelFor(day)} className={`h-3 w-3 rounded-[2px] ${levelClasses[contributionLevel(day.contributionCount, max)]}`} /> : <span key={weekday} className="h-3 w-3" />
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-end gap-1.5 text-[11px] text-zinc-600" aria-hidden="true"><span>Less</span>{levelClasses.map((className) => <span key={className} className={`h-3 w-3 rounded-[2px] ${className}`} />)}<span>More</span></div>
          </>
        ) : (
          <div className="flex min-h-32 items-center justify-center text-center"><div><p className="text-sm font-medium text-zinc-300">Activity is unavailable right now.</p><p className="mt-1 text-sm text-zinc-600">Visit the GitHub profile to see recent work.</p></div></div>
        )}
      </a>
    </section>
  )
}
