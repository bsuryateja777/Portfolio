import { CodeIcon, EduIcon, EduIconDark, ProjectIcon, ProjectIconDark, HTML, HTMLDark, CSS, CSSDark, JavaScript, JavaScriptDark, React, NODE, MongoDB, MySQL, Terraform, Docker, SnowflakeIcon, Kafka } from "../Assets/icons/Icons"
import RentEase1 from "../Assets/projects/RentEase/RentEase1.png"
import RentEase2 from "../Assets/projects/RentEase/RentEase2.png"
import RentEase3 from "../Assets/projects/RentEase/RentEase3.png"
import RentEase4 from "../Assets/projects/RentEase/RentEase4.png"
import RentEase5 from "../Assets/projects/RentEase/RentEase5.png"
import RentEase6 from "../Assets/projects/RentEase/RentEase6.png"
import RentEase7 from "../Assets/projects/RentEase/RentEase7.png"
import Terraflex1 from "../Assets/projects/Terraflex/Terraflex1.png"
import Terraflex2 from "../Assets/projects/Terraflex/Terraflex2.png"
import MicroServices1 from "../Assets/projects/Micro-Services/Micro-Services1.png"
import MicroServices2 from "../Assets/projects/Micro-Services/Micro-Services2.png"
import MicroServices3 from "../Assets/projects/Micro-Services/Micro-Services3.png"
import MicroServices4 from "../Assets/projects/Micro-Services/Micro-Services4.png"
import MicroServices5 from "../Assets/projects/Micro-Services/Micro-Services5.png"
import MicroServices6 from "../Assets/projects/Micro-Services/Micro-Services6.png"
import MicroServices7 from "../Assets/projects/Micro-Services/Micro-Services7.png"





export const infoList = [
    { icon: EduIcon, iconDark: EduIconDark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: CodeIcon, iconDark: CodeIcon, title: 'Languages & Tools', description: 'Java, JavaScript, HTML, CSS, React, Node.js, Express, MongoDB, MySQL, Terraform, Docker, Kafka, Snowflake, Azure' },
    { icon: ProjectIcon, iconDark: ProjectIconDark, title: 'Projects', description: 'RentEase, TerraFlex, MicroServices' },

]

export const techStack = [
    { icon: HTML, iconDark: HTMLDark, title: 'HTML' },
    { icon: CSS, iconDark: CSSDark, title: 'CSS' },
    { icon: JavaScript, iconDark: JavaScriptDark, title: 'Java Script' },
    { icon: React, iconDark: React, title: 'React' },
    { icon: NODE, iconDark: NODE, title: 'Node' },
    { icon: MongoDB, iconDark: MongoDB, title: 'MongoDB' },
    { icon: MySQL, iconDark: MySQL, title: 'My SQL' },
    { icon: Terraform, iconDark: Terraform, title: 'Terraform' },
    { icon: Docker, iconDark: Docker, title: 'Docker' },
    { icon: SnowflakeIcon, iconDark: SnowflakeIcon, title: 'Snowflake' },
    { icon: Kafka, iconDark: Kafka, title: 'Kafka' },
]

export const projects = [
    {
        photos: [RentEase1, RentEase2, RentEase3, RentEase4, RentEase5, RentEase6, RentEase7],
        title: "RentEase - A Fullstack MERN-Based Booking & Hosting Platform",
        description: "A full-stack MERN rental marketplace where users can list and book properties. Features JWT cookie-based authentication, bcryptjs password hashing, Cloudinary photo management, city-based search, multi-photo listings, and a date-range booking system with tiered pricing. Deployed on Render.",
        source: "https://github.com/bsuryateja777/RentEase",
    },
    {
        photos: [Terraflex1, Terraflex2],
        title: "TerraFlex - Modular Feature-Flag-Driven AWS Infrastructure Framework",
        description: "TerraFlex is a reusable Terraform framework for provisioning AWS infrastructure on demand. Every service — VPC, EC2, RDS, ECS Fargate, ALB, NLB, App Runner, Amplify, ECR, CloudTrail, and more — is opt-in via boolean feature flags with automatic dependency resolution. Designed for multi-environment deployments with remote state management via S3 and DynamoDB.",
        source: "https://github.com/bsuryateja777/TerraFlex",
    },
    {
        photos: [MicroServices1, MicroServices2, MicroServices3, MicroServices4, MicroServices5, MicroServices6, MicroServices7],
        title: "MicroServices - Containerized Microservices Architecture",
        description: "An e-commerce platform with 6 independent Node/Express microservices (Gateway, Auth, Product, Cart, Order, Wallet) using Apache Kafka for async payment event streaming between Order and Wallet services. Containerised with Docker Compose and structured for Kubernetes deployment across three branches: local, Docker, and independent containers.",
        source: "https://github.com/bsuryateja777/MicroServices",
    },
]

export const experience = [
  {
    organisation: "Accenture",
    position: "Associate Software Engineer (Client: Siemens - SDC L1)",
    duration: "Oct 2024 - Present",
    description:
      "Working in Siemens Data Cloud (SDC L1) through Accenture, focusing on Azure infrastructure provisioning using Terraform. Contributing to scalable cloud solutions and supporting multiple services within the SDC ecosystem.",
  },
];