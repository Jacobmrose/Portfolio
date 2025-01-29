'use client'
import { useEffect, useState } from 'react'

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const currentYear = new Date().getFullYear()
    if (year !== currentYear) {
      setYear(currentYear)
    }
  }, [year])

  return (
    <footer className='c-space pb-5 border-t border-black flex justify-between items-center flex-wrap gap-5'>
      <p className='text-gray-300'>Built with ❤️ by Jacob Rose</p>

      <div className='flex gap-3'>
        <a
          href='https://github.com/jacobmrose'
          target='_blank'
          rel='noopener noreferrer'
          className='social-icon'
        >
          <img src='/assets/github.svg' alt='GitHub' className='w-6 h-6' />
        </a>
        <a
          href='https://instagram.com/jacobmrose'
          target='_blank'
          rel='noopener noreferrer'
          className='social-icon'
        >
          <img
            src='/assets/instagram.svg'
            alt='Instagram'
            className='w-6 h-6'
          />
        </a>
      </div>

      <p className='text-gray-300'>© {year} | All rights reserved.</p>
    </footer>
  )
}

export default Footer
