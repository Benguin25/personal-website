import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import BackToTop from '@/components/BackToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Benjamin Probert - Computer Science Student',
  description: 'Personal portfolio of Benjamin Probert, Computer Science student at University of Guelph',
  keywords: 'Benjamin Probert, Computer Science, University of Guelph, Portfolio, Developer',
  authors: [{ name: 'Benjamin Probert' }],
  openGraph: {
    title: 'Benjamin Probert - Computer Science Student',
    description: 'Personal portfolio of Benjamin Probert, Computer Science student at University of Guelph',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ScrollProgress />
        <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  )
}