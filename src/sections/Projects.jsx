import React, { Suspense, useState } from 'react';
import { myProjects } from "../constants/index.js";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import MacBook from "../components/Macbook.jsx";
import { useMediaQuery } from "react-responsive";

const projectCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex];
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    return (
        <section className="c-space my-20" id="projects">
            <p className="head-text">My Work</p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-3xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                    </div>
                    <div className="p-3 backdrop-filter backdrop:-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm" />
                    </div>
                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="left arrow" />
                        </button>

                        <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {isMobile ? (
                    <div className="border border-black-300 bg-black-200 rounded-lg  w-full h-fit">
                        <div className="flex flex-col h-full w-full bg-base-200 shadow-xl rounded-lg overflow-hidden">
                            <div className="bg-gray-800 text-white flex items-center p-2">
                                <div className="flex space-x-2">
                                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                </div>
                                <div className="ml-auto text-xs pr-4">{currentProject.title}</div>
                            </div>

                            <div className="flex-grow bg-black">
                                <video
                                    src={(isMobile && selectedProjectIndex === 0) ? '/models/project/MediCortex.mov':currentProject.texture}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="border border-black-300 bg-black-200 rounded-lg h-96 lg:h-full">
                        <Canvas>
                            <ambientLight intensity={0.8} />
                            <directionalLight position={[3, 16, 5]} />
                            <Center>
                                <Suspense fallback={<CanvasLoader />}>
                                    <group scale={40} position={[0, -6, -2]} rotation={[0.5, 0, 0]}>
                                        <MacBook texture={currentProject.texture} />
                                    </group>
                                </Suspense>
                            </Center>
                            <OrbitControls
                                minAzimuthAngle={-Math.PI / 2}
                                maxAzimuthAngle={Math.PI / 2}
                                minPolarAngle={Math.PI / 2}
                                enableZoom={false}
                                enablePan={false}
                            />
                        </Canvas>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;