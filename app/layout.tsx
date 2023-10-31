import { Footer, Navbar } from '@/app/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HiDay',
  description: 'learning next js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        {/* <Navbar />  */}
        {children}
        {/* <Footer /> */}
       </body>
    </html>
  )
}
