'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const currentYear = new Date().getFullYear()
    if (year !== currentYear) {
      setYear(currentYear)
    }
  }, [year])

  return (
    <footer className='c-space pb-5 pt-5 w-full bg-black flex justify-between items-center flex-wrap gap-5'>
      <p className='text-gray-300 xl:ml-64'>Built with ❤️ by Jacob Rose</p>

      <div className='flex'>
        <a
          href='https://github.com/jacobmrose'
          target='_blank'
          rel='noopener noreferrer'
          className='social-icon'
        >
          <Image src='/assets/github.svg' alt='GitHub' width={24} height={24} />
        </a>
        <a
          href='https://instagram.com/jacobmrose'
          target='_blank'
          rel='noopener noreferrer'
          className='social-icon'
        >
          <Image
            src='/assets/instagram.svg'
            alt='Instagram'
            width={24}
            height={24}
          />
        </a>
      </div>

      <p className='text-gray-300 xl:mr-64'>© {year} | All rights reserved.</p>
    </footer>
  )
}

export default Footer
