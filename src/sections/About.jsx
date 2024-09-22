import React, {useState} from 'react';
import {
    FaApple, FaWindows, FaLinux, FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact,
    FaDatabase, FaTerminal, FaCalculator, FaLayerGroup
} from 'react-icons/fa';
import {
    SiSwift, SiJavascript, SiTensorflow, SiMongodb, SiFirebase, SiCplusplus,
    SiOpengl, SiAdobephotoshop, SiAdobeillustrator, SiFigma
} from 'react-icons/si';
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () =>{
        console.log("copy")
        navigator.clipboard.writeText('octamarina@gmail.com')
        setHasCopied(true)
        setTimeout(()=>{
            setHasCopied(false)
        }, 2000)
    }
    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full h-full object-contain"/>

                        <div>
                            <p className="grid-headtext">Hi, I'm Octavian</p>
                            <p className="grid-subtext">
                                I’m currently pursuing a master’s degree in AI at Babeș-Bolyai University,
                                with a Bachelor’s in Computer Science. My expertise spans AI, mobile
                                development (with a focus on native iOS), 3D, web development.
                                I also have 2 years of professional experience working as a Java developer.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container relative">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe height={326} width={326} backgroundColor="rgba(0,0,0,0)"
                                   backgroundImageOpacity={0.5}
                                   showAtmosphere
                                   showGraticules
                                   globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                   bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />

                        </div>
                        <p className="grid-headtext">Available for remote work worldwide.</p>
                        <p className="grid-subtext">
                            I'm based in Cluj-Napoca, Romania, with remote work available.
                        </p>
                        <a href={"#contact"}>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                        </a>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="relative">
                            <FaLayerGroup
                                className="absolute inset-0 w-full h-full text-gray-500"
                                style={{opacity: 0.1, fontSize: '10rem'}}
                            />
                            <div>
                                <p className="grid-headtext my-12">Tech Stack</p>
                                <ul className="grid-subtext list-disc list-inside">
                                    <li>
                                        <strong>Native iOS Development:</strong> UIKit, SwiftUI
                                        <SiSwift className="inline-block ml-2"/>
                                    </li>
                                    <li>
                                        <strong>Java Development:</strong> Java, Spring Framework, JavaFX, Java Swing,
                                        Maven, Gradle
                                        <FaJava className="inline-block ml-2"/>
                                    </li>
                                    <li>
                                        <strong>Databases:</strong> SQL (PostgreSQL), NoSQL (MongoDB)
                                        <FaDatabase className="inline-block ml-2"/>
                                    </li>
                                    <li>
                                        <strong>Web and Mobile Development:</strong> HTML, CSS, JavaScript, Typescript React, React
                                        Native, Expo, Tailwind CSS, Bootstrap, Vite, Drei, Django
                                        <FaHtml5 className="inline-block ml-1"/>
                                        <FaCss3Alt className="inline-block mx-1"/>
                                        <SiJavascript className="inline-block mx-1"/>
                                        <FaReact className="inline-block ml-1"/>
                                    </li>
                                    <li>
                                        <strong>3D and Graphics:</strong> Advanced experience with Three.js, React Three
                                        Fiber, C++, OpenGL
                                        <SiOpengl className="inline-block ml-2"/>
                                    </li>
                                    <li>
                                        <strong>Python and Data Science:</strong> TensorFlow, NumPy, Pandas
                                        <FaPython className="inline-block ml-2"/>
                                    </li>
                                    <li>
                                        <strong>Operating Systems:</strong> macOS, Windows, Linux, grep, sed, awk, shell
                                        scripting
                                        <FaApple className="inline-block ml-1"/>
                                        <FaWindows className="inline-block mx-1"/>
                                        <FaLinux className="inline-block ml-1"/>
                                        <FaTerminal className="inline-block ml-1"/>
                                    </li>
                                    <li>
                                        <strong>Mathematical and Algorithmic Skills:</strong> MATLAB, Maple
                                        <FaCalculator className="inline-block ml-2"/>
                                    </li>
                                    <li>
                                        <strong>Experience with Firebase</strong>
                                        <SiFirebase className="inline-block ml-2"/>
                                    </li>
                                    <li>
                                        <strong>Design Tools:</strong> Adobe Photoshop, Adobe Illustrator, Figma
                                        <SiAdobephotoshop className="inline-block ml-2"/>
                                        <SiAdobeillustrator className="inline-block ml-2"/>
                                        <SiFigma className="inline-block ml-2"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <p className="grid-headtext">Building Effective Solutions from Scratch.</p>
                        <p className="grid-subtext">
                            Leveraging my algorithmic skills, I develop software from design through execution,
                            delivering comprehensive solutions.
                        </p>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                    <img
                            src="assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact Me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img
                                    src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                                    alt="copy"
                                    className="mr-2"
                                />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray-gradient text-white">octamarina@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About