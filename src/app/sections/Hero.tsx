'use client'
import React, { Suspense } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
// import { Leva, useControls } from 'leva'

const Hero = () => {
  // // Define the controls to manipulate position, scale, and rotation of the HackerRoom
  // const {
  //   positionX,
  //   positionY,
  //   positionZ,
  //   scale,
  //   rotationX,
  //   rotationY,
  //   rotationZ,
  // } = useControls('HackerRoom', {
  //   positionX: { value: 2.5, min: -10, max: 10 },
  //   positionY: { value: 2.5, min: -10, max: 10 },
  //   positionZ: { value: 2.5, min: -10, max: 10 },
  //   scale: { value: 1, min: 0.1, max: 10 },
  //   rotationX: { value: 0, min: -10, max: 10 },
  //   rotationY: { value: 0, min: -10, max: 10 },
  //   rotationZ: { value: 0, min: -10, max: 10 },
  // })

  return (
    <section className='min-h-screen w-full flex flex-col relative'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-mono'>
          Hi, I am Jacob <span className='waving-hand'>👋</span>
        </p>
        <p className='hero_tag text-gray_gradient'>
          Building Modern & Scalable Applications
        </p>
        {/* <Leva /> */}
        <div className='w-full h-full absolute inset-0'>
          <Canvas className='w-full h-full'>
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />
              <HackerRoom
                position={[0, -8.5, 0]}
                rotation={[0, -Math.PI, 0]}
                scale={0.1}
              />
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Hero
