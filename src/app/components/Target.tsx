import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

type TargetProps = JSX.IntrinsicElements['mesh'] & {
  modelPath?: string // Optional prop for specifying the model path
}

const Target: React.FC<TargetProps> = (props) => {
  const targetRef = useRef<Mesh>(null)
  const { scene } = useGLTF(props.modelPath || 'models/model.gltf')

  useEffect(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      })
    }
  }, [])

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 7, 0]}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Target
