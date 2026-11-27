import type { Metadata } from 'next'
import Report from './Report'

export const metadata: Metadata = {
  title: 'Fall at Magnet Forensics - Co-op Work Term Report | Benjamin Probert',
  description: 'A Fall 2026 work term reflection on digital forensics, building artifacts, and learning to write reliable software at Magnet Forensics.',
  robots: { index: false, follow: false },
}

export default function Page() { return <Report /> }
