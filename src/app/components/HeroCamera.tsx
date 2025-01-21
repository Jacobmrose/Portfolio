'use client'
import React, { ReactNode, RefObject } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { Group } from 'three'

interface HeroCameraProps {
  children?: ReactNode // Allows passing React children
  isMobile: boolean // Indicates whether the view is mobile
  groupRef: RefObject<Group> // Ref for rotating the HackerRoom
}

const HeroCamera: React.FC<HeroCameraProps> = ({
  children,
  isMobile,
  groupRef,
}) => {
  useFrame((state, delta) => {
    if (groupRef.current) {
      const sensitivity = isMobile ? 4 : 3 // Adjust sensitivity for mobile and desktop

      // Pointer interaction for both mobile and desktop
      easing.dampE(
        groupRef.current.rotation,
        [
          -state.pointer.y / sensitivity, // Adjust vertical rotation based on pointer movement
          state.pointer.x / sensitivity, // Adjust horizontal rotation based on pointer movement
          0,
        ],
        0.25,
        delta
      )
    }
  })

  return <group ref={groupRef}>{children}</group>
}

export default HeroCamera
