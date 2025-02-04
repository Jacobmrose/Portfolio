'use client'
import React from 'react'
import ComputersCanvas from '../components/Computer'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section
      className='relative w-full h-screen flex flex-col items-center justify-center'
      id='home'
    >
      {/* Header Text */}
      <div className='absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5'>
        <div className='flex flex-col justify-center items-center mt-5'></div>
        <div>
          <h1 className='text-white font-bold mt-12 text-4xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap font-mono'>
            Hi, I'm <span className='text-[#915EFF]'>Jacob</span>
          </h1>
        </div>
      </div>

      {/* 3D Model */}
      <div className='absolute inset-0'>
        <ComputersCanvas />
      </div>

      {/* Call-to-Action Button */}
      <div className='absolute bottom-7 left-0 right-0 flex justify-center z-10'>
        <a href='#about' className='w-fit' id='about'>
          <Button
            name="Let's work together"
            isBeam
            containerClass='sm:w-fit w-full sm:min-w-96'
            onClick={() => null}
          />
        </a>
      </div>
    </section>
  )
}

export default Hero
