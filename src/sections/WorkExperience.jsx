import {Suspense, useState} from 'react';
import { workExperiences } from '../constants/index.js';
import {Canvas} from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {Environment, OrbitControls} from "@react-three/drei";
import Developer from "../components/Developer.jsx";

const WorkExperience = () => {
    const [animationName, setAnimationName] = useState('idle');
    return (
        <section className="c-space my-20" id="work">
            <div className="w-full text-white-600">
                <p className="head-text">My Experience</p>

                <div className="work-container">
                    <div className="work-canvas">
                        <Canvas shadows>
                            <ambientLight intensity={0.5} />

                            <directionalLight
                                position={[2, 5, 5]}
                                intensity={1.5}
                                color="#ffffff"
                                castShadow
                            />

                            <spotLight
                                position={[-5, 5, -5]}
                                intensity={1.2}
                                angle={0.4}
                                penumbra={1}
                                color="#ffcccc"
                                castShadow
                            />

                            <pointLight
                                position={[10, 10, 10]}
                                intensity={0.8}
                                color="#ffffff"
                            />

                            <Environment preset="sunset" />

                            <OrbitControls
                                enableZoom={false}
                                enablePan={false}
                                maxPolarAngle={Math.PI / 2}
                            />

                            <Suspense fallback={<CanvasLoader />}>
                                <Developer position-y={-3} scale={3} animationName={animationName} />
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOut={() => setAnimationName('idle')}
                                    className="work-content_container group">
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <img className="w-full h-full" src={item.icon} alt=""/>
                                        </div>

                                        <div className="work-content_bar"/>
                                    </div>

                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-white-800">{item.name}</p>
                                        <p className="text-sm mb-5">
                                            {item.pos} -- <span>{item.duration}</span>
                                        </p>
                                        <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;