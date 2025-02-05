'use client'
import React, { useEffect, useRef, useMemo } from 'react'
import { useGraph } from '@react-three/fiber'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import * as THREE from 'three'

type DeveloperProps = React.ComponentPropsWithoutRef<'group'> & {
  animationName?: 'idle' | 'salute' | 'clapping' | 'victory'
}

type GLTFResult = {
  nodes: Record<string, THREE.SkinnedMesh | THREE.Bone>
  materials: Record<string, THREE.Material>
}

type AnimationActionMap = Record<string, THREE.AnimationAction>

const Developer: React.FC<DeveloperProps> = ({
  animationName = 'idle',
  ...props
}) => {
  const group = useRef<THREE.Group>(null)

  const { scene } = useGLTF('/models/animations/developer.glb')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone) as GLTFResult

  const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx')
  const { animations: saluteAnimation } = useFBX(
    '/models/animations/salute.fbx'
  )
  const { animations: clappingAnimation } = useFBX(
    '/models/animations/clapping.fbx'
  )
  const { animations: victoryAnimation } = useFBX(
    '/models/animations/victory.fbx'
  )

  idleAnimation[0].name = 'idle'
  saluteAnimation[0].name = 'salute'
  clappingAnimation[0].name = 'clapping'
  victoryAnimation[0].name = 'victory'

  const { actions } = useAnimations(
    [
      idleAnimation[0],
      saluteAnimation[0],
      clappingAnimation[0],
      victoryAnimation[0],
    ],
    group
  ) as { actions: AnimationActionMap }

  useEffect(() => {
    const action = actions?.[animationName]
    if (action) {
      action.reset().fadeIn(0.5).play()

      return () => {
        action.fadeOut(0.5)
      }
    }

    return undefined
  }, [animationName, actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      {Object.entries(nodes).map(([name, node]) =>
        node instanceof THREE.SkinnedMesh ? (
          <skinnedMesh
            key={name}
            name={name}
            geometry={node.geometry}
            material={
              Array.isArray(node.material) ? node.material[0] : node.material
            }
            skeleton={node.skeleton}
            morphTargetDictionary={node.morphTargetDictionary}
            morphTargetInfluences={node.morphTargetInfluences}
          />
        ) : null
      )}
    </group>
  )
}

useGLTF.preload('/models/animations/developer.glb')

export default Developer
