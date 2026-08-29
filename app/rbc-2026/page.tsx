import React from 'react'
import type { Metadata } from 'next'
import WorkTermReport from './WorkTermReport'

export const metadata: Metadata = {
  title: 'Summer at RBC — Co-op Work Term Report | Benjamin Probert',
  description:
    'Co-op work term report for my Summer 2026 term as a GenAI Engineer at RBC: what I built, a day in the life, and what I took away from four months at a bank.',
  openGraph: {
    title: 'Summer at RBC — Co-op Work Term Report',
    description:
      'Co-op work term report for my Summer 2026 term as a GenAI Engineer at RBC.',
    type: 'article',
  },
}

export default function Page() {
  return <WorkTermReport />
}
