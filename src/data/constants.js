import CoverSure from "../assets/images/CoverSure_logo.png";
import doremon from "../assets/images/DoremonDen.svg";
import Serri from "../assets/images/Serri-logo.png";
import SPCU from "../assets/images/SPCU.JPG";
import RiskCalculator from "../assets/images/RiskCalculator.png";
import AiAutomated from '../assets/images/AiAutomated.jpg';
import PhoneQ from '../assets/images/PhoneQ.jpg';
export const Bio = {
  name: "Aditya Kumar",
  roles: [
    "Product Manager",
    "AI Enthusiast",
    "Problem Solver",
  ],
  description:
    "Passionate Product Manager with a proven track record of building growth-focused products leveraging AI and automation to drive user engagement and business outcomes.",
  resume: "https://drive.google.com/drive/folders/1kc0myqoXmDdxuP4udPHKQmgc2579_3Bc",
  linkedin: "https://www.linkedin.com/in/aditya-kumar-8014b7203/",
  insta: "",
};

export const skills = [
  {
    title: "Product Management",
    skills: [
      { name: "Product Roadmapping", image: "https://cdn-icons-png.flaticon.com/128/270/270780.png" },
      { name: "OKRs", image: "./assets/images/OKRs.webp" },
      { name: "Sprint Planning", image: "https://cdn-icons-png.flaticon.com/128/270/270780.png" },
      { name: "Agile Methodology", image: "https://cdn-icons-png.flaticon.com/128/270/270780.png" },
      { name: "PRD Writing", image: "https://cdn-icons-png.flaticon.com/128/270/270780.png" },
      { name: "Stakeholder Management", image: "https://cdn-icons-png.flaticon.com/128/270/270780.png" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Figma", image: "https://cdn-icons-png.flaticon.com/128/270/270780.png" },
      { name: "Jira", image: "https://cdn-icons-png.flaticon.com/128/270/270780.png" },
      { name: "Postman", image: "https://cdn-icons-png.flaticon.com/128/270/270780.png" },
      { name: "Mixpanel", image: "https://cdn-icons-png.flaticon.com/128/270/270780.png" },
      { name: "Metabase", image: "https://cdn-icons-png.flaticon.com/128/270/270780.png" },
      { name: "Trello", image: "https://cdn-icons-png.flaticon.com/128/270/270780.png" },
      { name: "MS Office", image: "https://cdn-icons-png.flaticon.com/128/270/270780.png" },
      { name: "Python", image: "https://cdn-icons-png.flaticon.com/128/270/270780.png" },
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      { name: "n8n", image: "https://cdn-icons-png.flaticon.com/128/270/270780.png" },
      { name: "Make", image: "https://cdn-icons-png.flaticon.com/128/270/270780.png" },
      { name: "Prompt Engineering", image: "https://cdn-icons-png.flaticon.com/128/270/270780.png" },
      { name: "Agentic Workflows", image: "https://cdn-icons-png.flaticon.com/128/270/270780.png" },
    ],
  },
  {
    title: "Core Competencies",
    skills: [
      { name: "User Research", image: "https://cdn-icons-png.flaticon.com/128/270/270780.png" },
      { name: "Design Thinking", image: "https://cdn-icons-png.flaticon.com/128/270/270780.png" },
      { name: "Consumer Psychology", image: "https://cdn-icons-png.flaticon.com/128/270/270780.png" },
      { name: "Critical Thinking", image: "https://cdn-icons-png.flaticon.com/128/270/270780.png" },
      { name: "Growth Strategy", image: "https://cdn-icons-png.flaticon.com/128/270/270780.png" },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    img: CoverSure,
    role: "Associate Product Manager",
    company: "CoverSure - B2C Insurance App",
    date: "July 2024 - Present",
    desc: [
      "Led end-to-end product roadmap for a one-stop motor insurance ecosystem including challan payment, Fastag recharge, PUC, and policy management.",
      "Scaled to 100,000+ vehicles added and made motor a key acquisition driver.",
      "Defined OKRs and shipped insurance & wellness product for 2 B2C partners serving 300,000+ end users.",
      "Built and launched Health Risk Analyzer Calculator adopted by 300,000+ users.",
      "Revamped homepage with personalization engine, driving 8x engagement growth validated via A/B testing.",
      "Integrated APIs with 5+ insurers to create a seamless and scalable motor purchase journey.",
      "Designed automated rule engine for personalized motor quotes, boosting leads by 7x.",
    ],
    skills: [
      "Product Strategy",
      "OKRs",
      "A/B Testing",
      "Analytics",
      "API Integrations",
      "Stakeholder Management",
    ],
    doc: "",
  },
  {
    id: 2,
    role: "Product Management Intern",
    img: doremon,
    company: "Doremon Den",
    date: "August 2022 – June 2024",
    desc: [
      "Executed growth and monetization strategies resulting in 6x revenue growth.",
      "Managed and scaled a 10,000+ product aspirant community.",
      "Expanded program to 23 cohorts with improved engagement metrics.",
    ],
    skills: [
      "Growth Strategy",
      "Monetization",
      "Community Building",
      "User Engagement",
    ],
    doc: "",
  },
  {
    id: 3,
    role: "Growth Specialist",
    img: Serri,
    company: "Serri - Marketing CRM",
    date: "May 2023 - July 2023",
    desc: [
      "Generated and closed warm leads contributing to overall client base expansion.",
      "Partnered with incubators across India and Singapore, increasing sales leads by 20%.",
    ],
    skills: [
      "Lead Generation",
      "Sales Funnel",
      "CRM",
      "Partnerships",
    ],
    doc: "",
  },
];

export const education = [
  {
    id: 1,
    img: SPCU,
    school: "Dr. SSB UICET, Panjab University, Chandigarh",
    date: "Aug 2020 - July 2024",
    desc: "Bachelor of Engineering in Food Technology with strong analytical, structured problem-solving, and technical foundations.",
    degree: "Bachelor of Engineering in Food Technology",
  },
];

export const projects = [
  {
    id: 1,
    title: "Motor Insurance Ecosystem - CoverSure",
    description: [
      "Built and scaled end-to-end motor insurance journey integrating 5+ insurers.",
      "Launched rule engine for personalized quotes driving 7x increase in leads.",
      "Implemented homepage personalization engine leading to 8x engagement growth.",
    ],
    image: CoverSure,
    tags: ["Product Strategy", "A/B Testing", "API Integration", "Growth"],
    category: "Product",
    github: "",
    webapp: "",
    overview:
      "End-to-end motor insurance ecosystem with personalized workflows and scalable insurer integrations.",
    member: [{ name: "", img: "", linkedin: "", github: "" }],
  },
  {
    id: 2,
    title: "Health Risk Analyzer Calculator",
    description: [
      "Designed AI-powered health risk assessment tool.",
      "Adopted by 300,000+ users and integrated by major B2C partner.",
      "Improved coverage recommendation through structured risk logic.",
    ],
    image: RiskCalculator,
    tags: ["AI Integration", "Analytics", "Product Discovery"],
    category: "Product",
    github: "",
    webapp: "",
    overview:
      "AI-powered health risk calculator recommending ideal insurance coverage.",
    member: [{ name: "", img: "", linkedin: "", github: "" }],
  },
  {
    id: 3,
    title: "AI Automated Marketing System",
    description: [
      "Designed and deployed automated marketing workflow using n8n + OpenAI.",
      "Reduced manual campaign operations through scalable AI workflows.",
      "Enabled low-ops automated outreach system.",
    ],
    image: AiAutomated,
    tags: ["n8n", "OpenAI", "Automation", "AI"],
    category: "AI Product",
    github: "",
    webapp: "",
    overview:
      "Automation-driven AI marketing system for scalable and efficient outreach.",
    member: [{ name: "", img: "", linkedin: "", github: "" }],
  },
  {
    id: 4,
    title: "PhoneQ - Queue & Crowd Management System",
    description: [
      "Identified long wait-time pain points across hospitals and service businesses.",
      "Built structured solution framework and pitched startup concept.",
      "Secured 1st runner-up at Delhi University startup competition.",
    ],
    image: PhoneQ,
    tags: ["Product Design", "User Research", "Startup"],
    category: "Startup Concept",
    github: "",
    webapp: "",
    overview:
      "Queue management concept reducing wait time inefficiencies across service industries.",
    member: [{ name: "", img: "", linkedin: "", github: "" }],
  },
];

export const email = "connect.aditya05@gmail.com";
