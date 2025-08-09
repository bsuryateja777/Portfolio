import { CodeIcon, EduIcon, EduIconDark, ProjectIcon, ProjectIconDark, HTML, HTMLDark, CSS, CSSDark, JavaScript, JavaScriptDark, React, NODE, MongoDB, mySQL } from "./Icons"
import RentEase1 from "../Assets/RentEase/RentEase1.png"
import RentEase2 from "../Assets/RentEase/RentEase2.png"
import RentEase3 from "../Assets/RentEase/RentEase3.png"
import RentEase4 from "../Assets/RentEase/RentEase4.png"
import RentEase5 from "../Assets/RentEase/RentEase5.png"
import RentEase6 from "../Assets/RentEase/RentEase6.png"
import RentEase7 from "../Assets/RentEase/RentEase7.png"





export const infoList = [
    { icon: CodeIcon, iconDark: CodeIcon, title: 'Languages', description: 'Java, HTML, CSS, JavaScript React Js, Mongo DB, My SQL' },
    { icon: EduIcon, iconDark: EduIconDark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: ProjectIcon, iconDark: ProjectIconDark, title: 'Projects', description: 'In Progress...' },

]

export const techStack = [
    { icon: HTML, iconDark: HTMLDark, title: 'HTML' },
    { icon: CSS, iconDark: CSSDark, title: 'CSS' },
    { icon: JavaScript, iconDark: JavaScriptDark, title: 'Java Script' },
    { icon: React, iconDark: React, title: 'React' },
    { icon: NODE, iconDark: NODE, title: 'Node' },
    { icon: MongoDB, iconDark: MongoDB, title: 'MongoDB' },
    { icon: mySQL, iconDark: mySQL, title: 'My SQL' },
]

export const projects = [
    { photos: [RentEase1, RentEase2, RentEase3, RentEase4, RentEase5, RentEase6, RentEase7], title: "RentEase – A Fullstack MERN-Based Booking & Hosting Platform", description: "RentEase is a fullstack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to host and book rental properties seamlessly. The platform features user authentication, Cloudinary image uploads, role-based access, property management, and booking functionality. It replicates core Airbnb-like experiences, including photo galleries, dynamic pricing, and user dashboards, making it a scalable rental marketplace.", source: "https://github.com/bsuryateja777/RentEase", deployed: "https://rentease-frontend.onrender.com/home" },
]

export const experience = [

    {
        oraganisation: "Accenture",
        position: "Associate Software Engineer",
        duration: "Oct 2024 - Present",
        description: "Currently on the bench at Accenture, focusing on enhancing my technical skills through continuous learning, building projects, and exploring modern technologies to stay industry-ready.",
    },
]