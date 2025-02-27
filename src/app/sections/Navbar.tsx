'use client'

import { useState } from 'react'
import Image from 'next/image'
import { navLinks } from '../constants'

const NavItems: React.FC = () => {
  return (
    <ul className='nav-ul font-mono'>
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className='nav-li'>
          <a href={href} className='nav-li_a' onClick={() => {}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }
  return (
    <header className='fixed top-0 right-0 left-0 z-50 bg-black'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 mx-auto sm:px-10 px-5'>
          <a
            href='/'
            className='text-neutral-400 font-bold text-xl hover:text-white transition-colors font-mono'
          >
            Jacob
          </a>
          <button
            onClick={toggleMenu}
            className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex'
            aria-label='Toggle menu'
          >
            <Image
              src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'}
              alt='toggle'
              width={24}
              height={24}
            />
          </button>
          <nav className='sm:flex hidden'>
            <NavItems />
          </nav>
        </div>
      </div>
      {/* Mobile Nav */}
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className='p-5'>
          <NavItems />
        </nav>
      </div>
    </header>
  )
}

export default Navbar
