import { useGSAP } from '@gsap/react'
import { Center, useTexture } from '@react-three/drei'
import gsap from 'gsap'
import { useCallback, useRef } from 'react'
import * as THREE from 'three'

// Define the type for the position prop
type RingsProps = {
  position: [number, number, number]
}

const Rings: React.FC<RingsProps> = ({ position }) => {
  // Ref to hold the mesh elements
  const refList = useRef<THREE.Mesh[]>([])

  // Callback to add the mesh to the refList
  const getRef = useCallback((mesh: THREE.Mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh)
    }
  }, [])

  // Load the texture
  const texture = useTexture('textures/rings.png')

  // GSAP animation for the rings
  useGSAP(
    () => {
      if (refList.current.length === 0) return

      refList.current.forEach((r) => {
        r.position.set(position[0], position[1], position[2])
      })

      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 1, // Increased pause between rotations
          yoyo: true, // Makes it alternate direction
        })
        .to(
          refList.current.map((r) => r.rotation),
          {
            y: `+=${Math.PI * 2}`, // Full rotation along Y-axis
            z: `+=${Math.PI * 0.5}`, // Slight tilt along Z-axis for variation
            duration: 4, // Slower animation
            ease: 'power2.inOut', // Smooth easing for better transition
            stagger: {
              each: 0.2, // Slightly longer stagger for a smoother appearance
            },
          }
        )
    },
    {
      dependencies: position,
    }
  )

  return (
    <Center>
      <group scale={0.3}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  )
}

export default Rings
