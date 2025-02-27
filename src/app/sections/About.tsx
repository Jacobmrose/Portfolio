'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Button from '../components/Button'

const About = () => {
  const Globe = dynamic(() => import('react-globe.gl'), { ssr: false })

  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(typeof window !== 'undefined')
  }, [])

  const [hasCopied, setHasCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText('jacobmrosedev@gmail.com')
    setHasCopied(true)
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }

  return (
    <section className='c-space my-20 px-4 pb-8'>
      <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
        {/* First Section */}
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <Image
              src='/assets/grid1.png'
              alt='grid-1'
              width={500}
              height={276}
              className='w-full h-auto sm:h-[276px] object-contain mb-6'
            />
            <p className='grid-headtext text-center'>Hi, I&apos;m Jacob</p>
            <p className='grid-subtext text-center'>
              Since 2023, I’ve developed a strong foundation in frontend
              development and a passion for crafting modern, responsive web
              solutions.
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div className='col-span-1 xl:row-span-3 flex flex-col justify-center items-center grid-container'>
          <div className='w-full flex justify-center items-center'>
            <Image
              src='/assets/grid2.png'
              alt='grid-2'
              width={276}
              height={276}
              className='w-full sm:w-[276px] h-auto object-contain mb-6'
            />
          </div>
          <div className='text-center'>
            <p className='grid-headtext'>Tech Stack</p>
            <p className='grid-subtext'>
              I specialize in leveraging technologies like React, TypeScript,
              Next.js, and Three.js to build interactive, scalable, and
              efficient web applications.
            </p>
          </div>
        </div>

        {/* Third Section with Globe */}
        <div className='col-span-1 xl:row-span-4'>
          <div className='grid-container'>
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex flex-col justify-center items-center'>
              {isClient && (
                <Globe
                  height={326}
                  width={326}
                  backgroundColor='rgba(0, 0, 0, 0)'
                  showAtmosphere
                  showGraticules
                  globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
                  bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
                  labelsData={[
                    {
                      lat: 27, // Latitude of your location
                      lng: -82, // Longitude of your location
                      text: "I'm here",
                      color: 'white',
                      size: 2, // Ensure size is part of the object
                    },
                  ]}
                  labelSize={(d) => (d as { size: number }).size} // Type assertion
                />
              )}
            </div>
            <div className='text-center mt-8'>
              <p className='grid-headtext'>Availability</p>
              <p className='grid-subtext'>
                Based in Florida, I offer flexible remote work opportunities.
              </p>
              <Button
                name='Contact Me'
                isBeam
                containerClass='w-full mt-10'
                onClick={() => {
                  const contactSection = document.querySelector('#contact')
                  contactSection?.scrollIntoView({ behavior: 'smooth' })
                }}
              />
            </div>
          </div>
        </div>

        {/* Fourth Section */}
        <div className='xl:col-span-2 xl:row-span-3'>
          <div className='grid-container text-center'>
            <Image
              src='/assets/grid3.png'
              alt='grid-3'
              width={500}
              height={266}
              className='w-full sm:h-[266px] h-fit object-contain'
            />
            <div>
              <p className='grid-headtext'>Why I Code</p>
              <p className='grid-subtext'>
                Coding isn&apos;t just my profession; it&apos;s my passion. From
                a young age, I&apos;ve been fascinated by how technology solves
                real-world problems. For me, it&apos;s about creating impactful
                solutions that improve people&apos;s lives. I love turning ideas
                into products and finding ways to push the limits of what
                technology can achieve. Coding is both my craft and my way to
                connect with the world, shaping the future through innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Fifth Section */}
        <div className='xl:col-span-1 xl:row-span-2'>
          <div className='grid-container'>
            <Image
              src='/assets/grid4.png'
              alt='grid-4'
              width={500}
              height={276}
              className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'
            />
            <div className='space-y-2'>
              <p className='grid-subtext text-center'>Email me</p>
              <div className='copy-container' onClick={handleCopy}>
                <Image
                  src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'}
                  alt='copy'
                  width={24}
                  height={24}
                />
                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>
                  jacobmrosedev@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='projects'></div>
    </section>
  )
}

export default About
