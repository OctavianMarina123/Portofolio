import React from 'react'
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import WorkExperience from "./sections/WorkExperience.jsx";

const App = () => {
    return (
        <main className="mx-auto">
            <Navbar/>
            <Hero/>
            <div className="max-w-7xl mx-auto">
                <About/>
                <Projects/>
                <WorkExperience/>
                <Contact/>
                <Footer/>
            </div>
        </main>
    )
}
export default App
