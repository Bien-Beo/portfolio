const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 3, suffix: "rd", label: "🎓 Year CS Student" },
    { value: 3, suffix: "+", label: "💻 Years of Coding Practice" },
    { value: 5, suffix: "+", label: "📂 Personal Projects" },
    { value: 100, suffix: "+", label: "🛠️ Bugs solved" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Learning with Purpose",
        desc: "I approach every project as a chance to grow. Whether it's a team assignment or a personal idea, I focus on clean code and continuous improvement.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Clear Team Communication",
        desc: "I’ve collaborated on multiple group projects at university using tools like GitHub, Notion, and Jira to keep everything aligned and transparent.",
    },
    {
        imgPath: "/images/time.png",
        title: "Consistent Deadlines",
        desc: "All university assignments and side projects are managed with personal deadlines to simulate real-world sprint workflows.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Docker",
        modelPath: "/models/docker.glb",
        scale: 10,
        rotation: [0, -Math.PI / 12, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
    {
        name: "IDE VSCode",
        modelPath: "/models/vscode.glb",
        scale: 7,
        rotation: [0, 0, 0],
    },
];

const expCards = [
    {
        review:
            "Biên brought dedication and clear communication to our remote team, playing a key role in delivering the Warranty Service module efficiently. His technical input helped ensure smooth integration across frontend and backend.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "Frontend Developer",
        date: "July 2024 - September 2024",
        responsibilities: [
            "Collaborated in a 3-member remote team to build the 'Warranty Service' module for the clinic’s website.",
            "Developed REST APIs using Node.js and MongoDB; built responsive UI with ReactJS and Bootstrap.",
            "Implemented form validation, user authentication, and admin control functionalities.",
            "Maintained project momentum and clear coordination using Git and remote workflows."
        ],
    },
    // {
    //     review:
    //         "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    //     imgPath: "/images/exp2.png",
    //     logoPath: "/images/logo2.png",
    //     title: "Full Stack Developer",
    //     date: "June 2020 - December 2023",
    //     responsibilities: [
    //         "Led the development of Docker's web applications, focusing on scalability.",
    //         "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
    //         "Contributed to open-source projects that were used with the Docker ecosystem.",
    //     ],
    // },
    // {
    //     review:
    //         "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    //     imgPath: "/images/exp3.png",
    //     logoPath: "/images/logo3.png",
    //     title: "React Native Developer",
    //     date: "March 2019 - May 2020",
    //     responsibilities: [
    //         "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
    //         "Improved app performance and user experience through code optimization and testing.",
    //         "Coordinated with the product team to implement features based on feedback.",
    //     ],
    // },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/beo.feelings_/",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/bien.beo.574263?locale=vi_VN",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        url: "https://www.x.com/",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/bientranngoc2809/",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};