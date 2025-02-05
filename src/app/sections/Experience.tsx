'use client'

import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Image from 'next/image'

import Developer from '../components/Developer'
import CanvasLoader from '../components/Loading'
import { workExperiences } from '../constants'

// Define valid animation names
type AnimationName = 'idle' | 'victory' | 'clapping' | 'salute'

// Define work experience data type
interface WorkExperienceItem {
  name: string
  pos: string
  duration: string
  title: string
  icon: string
  animation: AnimationName // Ensures animation is type-safe
}

// Ensure workExperiences is typed correctly
const experiences: WorkExperienceItem[] = workExperiences.map((item) => ({
  ...item,
  animation: item.animation as AnimationName, // Type assertion to enforce strict types
}))

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState<AnimationName>('idle')
  const handleSetAnimation = (animation: string) => {
    const validAnimation = animation.toLowerCase() as AnimationName
    if (['idle', 'victory', 'clapping', 'salute'].includes(validAnimation)) {
      setAnimationName(validAnimation)
    }
  }

  return (
    <section className='c-space my-20' id='work'>
      <div className='w-full text-white-600'>
        <p className='head-text text-center'>My Work Experience</p>
        <div className='work-container'>
          <div className='work-canvas'>
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2.7}
              />

              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-2.5}
                  scale={2.4}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className='work-content'>
            <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
              {experiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleSetAnimation(item.animation)}
                  onPointerOver={() => handleSetAnimation(item.animation)}
                  onPointerOut={() => setAnimationName('idle')}
                  className='work-content_container group'
                >
                  <div className='flex flex-col h-full justify-start items-center py-2'>
                    <div className='work-content_logo'>
                      <Image
                        className='bg-white'
                        src={item.icon}
                        alt={item.name}
                        width={50}
                        height={50}
                      />
                    </div>

                    <div className='work-content_bar' />
                  </div>

                  <div className='sm:p-5 px-2.5 py-5'>
                    <p className='font-bold text-white'>{item.name}</p>
                    <p className='text-sm mb-5 text-gray-300'>
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className='text-gray-500 group-hover:text-white transition-all ease-in-out duration-500'>
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
