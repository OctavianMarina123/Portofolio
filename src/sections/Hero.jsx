import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HeroRoom from "../components/HeroRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import * as THREE from "three";
import {useMediaQuery} from "react-responsive";
import Iphone from "../components/Iphone.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import MacBook from "../components/Macbook.jsx";

const Hero = () => {
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({maxWidth: 940});

    // Define positions based on device size
    const heroRoomPosition = isTablet ? [0, -6, 0] : isMobile ? [0, -5, 0] : [0, -7, 0];
    const heroRoomScale = isMobile ? 1.1 : 1.5;
    const heroRoomRotation = isMobile ? [0.3, -0.6, 0] : [0.42, -0.6, 0];

    const reactLogoScale = isMobile ? 0.3 : 0.4;
    const reactLogoPosition = isMobile?[
        heroRoomPosition[0]+ 6,
        heroRoomPosition[1]+ 10,
        heroRoomPosition[2]+ -2,
    ]:[
        heroRoomPosition[0]+ 6,
        heroRoomPosition[1]+ 13,
        heroRoomPosition[2]+ -2,
    ];
    const iphonePosition = isMobile?[
        heroRoomPosition[0]-5,
        heroRoomPosition[1]+ 10,
        heroRoomPosition[2]+ -2,
    ]:[
        heroRoomPosition[0]-8,
        heroRoomPosition[1]+ 13,
        heroRoomPosition[2] - 1,
    ];
    return (
        <section className="min-h-screen w-full flex flex-col relative bg-gradient-to-b from-[#41195d] to-black" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans z-10">
                    Hi, I'm Octavian Marina
                </p>
                <p className="hero_tag text-gray_gradient z-10">
                    Developer Merging AI, Web, 3D Technologies, and Mobile
                </p>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                        <HeroCamera>
                            <HeroRoom
                                scale={heroRoomScale}
                                position={heroRoomPosition}
                                rotation={heroRoomRotation}
                            />
                        </HeroCamera>
                        <ReactLogo
                            scale={reactLogoScale}
                            position={reactLogoPosition}
                        />
                        <Iphone
                            scale={3}
                            rotation={[1,0.5,-0.2]}
                            position={iphonePosition}
                        />
                        <ambientLight intensity={0.7} color="white"/>
                        <directionalLight position={[20, 20, 20]} intensity={7.0} color={"#c684b2"}/>
                    </Suspense>
                </Canvas>
            </div>
            <div className="max-w-7xl mx-auto absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's work togheter" isBeam  containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>
            </div>
        </section>
    );
}

export default Hero;