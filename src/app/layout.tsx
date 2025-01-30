import type { Metadata } from 'next'
import './globals.css'
import Navbar from './sections/Navbar'

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
      <body className='antialiased h-screen flex items-center justify-center font-mono'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
