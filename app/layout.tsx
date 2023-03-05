import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'F1 for beginners',
  description:
    'Website that teaches the basics of Formula 1 for people that know little or nothing about the sport.',
  keywords: ['Learn', 'Formula1', 'Beginners'],
  colorScheme: 'dark',
  creator: 'Daneus',
  icons: {
    icon: [{ url: '/logos/Formula1.svg' }]
  }
}

const RootLayout: React.FC = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className="bg-black box-border" lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
