// app/layout.tsx
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from './sections/Navbar'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: "Jacob Rose's Portfolio",
  description: 'React, Typescript, Nextjs, THREEjs, Tailwindcss',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen flex items-center justify-center`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
