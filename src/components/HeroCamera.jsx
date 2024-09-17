import React, {useRef} from 'react'
import {useFrame} from "@react-three/fiber";
import {easing} from "maath";
import {useMediaQuery} from "react-responsive";

const HeroCamera = ({children}) => {
    const groupRef = useRef()
    const isMobile = useMediaQuery({maxWidth: 768});

    useFrame((state, delta)=>{
        easing.damp3(state.camera.position,[0,0,30],0.25,delta)
        if(!isMobile) {
            easing.dampE(groupRef.current.rotation, [-state.pointer.y/3, state.pointer.x/5, 0],
                0.25, delta)
        }
    })
    return (
        <group ref={groupRef}>{children}</group>
    )
}
export default HeroCamera
