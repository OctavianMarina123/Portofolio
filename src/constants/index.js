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
        id: 4,
        name: 'Work',
        href: '#work',
    },
    {
        id: 5,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 6,
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
        texture: '/models/project/Project1.mp4',
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
        texture: '/models/project/Project2.mp4',
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
        texture: '/models/project/Project3.mp4',
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



export const workExperiences = [
    {
        id: 1,
        name: 'Babeș-Bolyai University',
        pos: 'Computer Science Student',
        duration: '2021 - 2024',
        title: "As a Computer Science student at Babeș-Bolyai University, I have been immersed in a wide range of subjects, from algorithms and data structures to software development and artificial intelligence. This program has allowed me to build a strong foundation in programming, problem-solving, and critical thinking, preparing me for a career in technology.",
        icon: '/assets/ubblogo.png',
        animation: 'clapping',
    },
    {
        id: 2,
        name: 'Info World',
        pos: 'Java Developer',
        duration: '2023 - Present',
        title: "As a Java Developer at Info World, I have deepened my expertise in Java, focusing on areas like DICOM (Digital Imaging and Communications in Medicine) and enterprise-level software development. This role has allowed me to work on complex healthcare solutions, enhancing both my technical skills and my ability to work in a team-oriented environment.",
        icon: '/assets/iwlogo-2.png',
        animation: 'salute',
    },
    {
        id: 3,
        name: 'Unplugged',
        pos: 'Founder & Developer',
        duration: '2024 - Present',
        title: "As the founder of Unplugged, I am building a startup centered around a mobile app designed to help reduce phone usage in social settings. The platform encourages healthier social interactions by allowing groups to track and limit screen time together, promoting a more mindful and balanced approach to technology. This venture has allowed me to combine my technical skills with business strategy to create a meaningful impact on digital wellness.",
        icon: '/assets/unplugged.png',
        animation: 'victory',
    },
    {
        id: 4,
        name: 'Babeș-Bolyai University',
        pos: 'Master\'s Student in Applied Computational Intelligence',
        duration: '2024 - Present',
        title: "Currently pursuing a Master's degree in Applied Computational Intelligence at Babeș-Bolyai University, I am focusing on advanced topics in artificial intelligence, machine learning, and data-driven technologies. This program enables me to deepen my understanding of AI while working on practical applications that address real-world problems, preparing me for cutting-edge innovation in the tech industry.",
        icon: '/assets/ubblogo.png',
        animation: 'clapping',
    }
];