export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];



export const myProjects = [
    {
        title: 'MediCortex - AI-Powered Medical Research Search Engine',
        desc: 'MediCortex is an AI-driven platform that transforms the way healthcare professionals and researchers access medical literature. By utilizing a powerful language model fine-tuned on over one million medical articles, MediCortex understands complex, natural language queries and delivers precise results from extensive medical databases like PubMed. It streamlines the search for critical information, enhancing both accuracy and efficiency.',
        subdesc:
            'Built natively for iOS with a fine-tuned BERT model, optimized for medical literature. The app integrates with a robust Django backend server for data handling and offers secure user authentication through Firebase.',
        href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
        texture: '/models/project/Project1.mov',
        logo: '/assets/medicortexlogo.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 40px 0px #233163',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Swift',
                path: '/assets/swift-icon.svg',
            },
            {
                id: 2,
                name: 'Python',
                path: 'assets/python-icon.svg',
            },
            {
                id: 3,
                name: 'Django',
                path: '/assets/djangoproject-icon.svg',
            },
            {
                id: 4,
                name: 'Tensorflow',
                path: '/assets/tensorflow-icon.svg',
            },
            {
                id: 5,
                name: 'Firebase',
                path: '/assets/firebase-icon.svg',
            },
        ],
    },
    {
        title: 'Target Tracker - Goal Setting for Improved Productivity',
        desc: 'Target Tracker helps you boost productivity by setting goals, tracking progress, and managing deadlines. Built with React Native and Expo, the app lets you create goal lists, view progress stats, and receive timely notifications before deadlines.',
        subdesc:
            'A cross-platform app with real-time progress tracking, deadline reminders, and seamless data sync for effective goal management.',
        href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
        texture: '/models/project/Project2.mov',
        logo: '/assets/TargetTrackerIcon.png',
        logoStyle: {
            backgroundColor: '#eee2dc',
            border: '0.2px solid #eee2dc',
            boxShadow: '0px 0px 20px 0px #eee2dc',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Expo',
                path: 'assets/expo-go-app.svg',
            },
            {
                id: 3,
                name: 'VitJs',
                path: '/assets/vitejs.svg',
            },
        ],
    },
    {
        title: 'SolarSim - Interactive 3D Solar System Simulation',
        desc: 'SolarSim is an interactive 3D simulation of the solar system built using JavaScript and Three.js. The project models the orbits and motions of planets using mathematical functions to accurately simulate their trajectories. With realistic lighting and scaling, users can explore the solar system in real-time, visualizing the dynamic relationships between planets, moons, and the sun.',
        subdesc:
            'Developed with Three.js for web-based interactivity, the project has also been implemented in C++ using OpenGL for high-performance rendering. Both versions provide an immersive experience into planetary motion through physics-based modeling.',
        href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
        texture: '/models/project/Project3.mov',
        logo: '/assets/solarsystem.png',
        logoStyle: {
            backgroundColor: '#212330',
            background:
                '#212330',
            border: '0.2px solid #212330',
            boxShadow: '0px 0px 30px 0px #8c8c94',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'threejs',
                path: '/assets/threejs-1.svg',
            },
            {
                id: 2,
                name: 'Opengl',
                path: 'assets/opengl-1.svg',
            },
            {
                id: 3,
                name: 'Javascript',
                path: '/assets/logo-javascript.svg',
            },
            {
                id: 4,
                name: 'C++',
                path: '/assets/c.svg',
            },
        ],
    },
];



