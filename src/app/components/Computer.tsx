'use client'
import CanvasLoader from './CanvasLoader'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import { Suspense } from 'react'

const Computer = () => {
  const computer = useGLTF('/desktop_pc/scene.gltf')
  const { size } = useThree()

  // Dynamically calculate scale and position based on screen width breakpoints
  let scale = 0.65
  let position: [number, number, number] = [0, -2.15, -1.0]

  if (size.width < 1250) {
    scale = 0.4
    position = [0, -1.3, -0.7]
  }
  if (size.width < 950) {
    scale = 0.3
    position = [0, -1.0, -0.6]
  }
  if (size.width < 500) {
    scale = 0.2
    position = [0, -0.7, -0.5]
  }

  return (
    <mesh>
      {/* General lighting */}
      <hemisphereLight intensity={1.25} groundColor='black' />
      <pointLight intensity={1} position={[0, 10, 0]} />

      {/* Optional: Directional light for softer backlighting */}
      <directionalLight position={[0, 5, -10]} intensity={5} />

      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false} // Disable right-click drag
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
