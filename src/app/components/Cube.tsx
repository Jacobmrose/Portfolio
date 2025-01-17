import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import { Float, useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'

// Define the structure of the GLTF model
type GLTFResult = {
  nodes: {
    Cube: THREE.Mesh
  }
}

type CubeProps = GroupProps & {
  modelPath?: string
  texturePath?: string
}

const Cube: React.FC<CubeProps> = ({
  modelPath = 'models/cube.glb',
  texturePath = 'textures/cube.png',
  ...props
}) => {
  const { nodes } = useGLTF(modelPath) as unknown as GLTFResult
  const texture = useTexture(texturePath)

  const cubeRef = useRef<THREE.Mesh>(null)

  useEffect(() => {
    if (!cubeRef.current) return // Ensure cubeRef is not null

    // GSAP timeline for continuous rotation
    const timeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
      yoyo: true,
    })

    timeline.to(cubeRef.current.rotation, {
      y: '+=2', // Continually rotates the cube around the Y-axis
      x: '+=2', // Continually rotates the cube around the X-axis
      duration: 2.5,
      ease: 'power1.inOut',
    })

    // Cleanup GSAP timeline on unmount
    return () => {
      timeline.kill()
    }
  }, []) // Empty dependency array ensures the effect runs only once on mount

  return (
    <Float floatIntensity={2}>
      <group
        position={[9, -4, 0]}
        rotation={[2.6, 0.8, -1.8]}
        scale={0.5}
        dispose={null}
        {...props}
      >
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
        >
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  )
}

useGLTF.preload('models/cube.glb')

export default Cube
