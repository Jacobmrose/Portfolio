// app/components/Navbar.tsx
'use client'

import { useState } from 'react'

const NavItems = () => {
  return <ul className='nav-ul'></ul>
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }
  return (
    <header className='fixed top-0 right-0 left-0 z-50 bg-black/90'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 mx-auto sm:px-10 px-5'>
          <a
            href='/'
            className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'
          >
            Jacob
          </a>
          <button
            onClick={toggleMenu}
            className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex'
            aria-label='Toggle menu'
          >
            <img
              src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
              alt='toggle'
              className='h-6 w-6'
            />
          </button>
          <nav className='sm:flex hidden'>
            <NavItems />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
