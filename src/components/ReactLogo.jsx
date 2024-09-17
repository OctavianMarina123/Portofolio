import React, {useRef} from 'react'
import { useGLTF } from '@react-three/drei'
import {useFrame} from "@react-three/fiber";

const ReactLogo=(props)=> {
    const { nodes, materials } = useGLTF('/models/react.glb')
    const meshRef = useRef()
    useFrame(({ clock }) => {
        meshRef.current.position.y = Math.sin(clock.getElapsedTime())
        meshRef.current.rotation.y = Math.cos(clock.getElapsedTime()) *0.6
    });
    return (
        <group {...props} dispose={null}>
            <mesh
                ref={meshRef}
                castShadow
                receiveShadow
                geometry={nodes['React-Logo_Material002_0'].geometry}
                material={materials['Material.002']}
                position={[0, 0.079, 0.181]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.392, 0.392, 0.527]}
            />
        </group>
    )
}

useGLTF.preload('/models/react.glb')
export default ReactLogo
