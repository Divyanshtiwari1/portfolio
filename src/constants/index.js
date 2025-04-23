import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cpp,
  python,
  research,
  translate,
  chatbot,
  nvidia,
  hackiit,
  amaze,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning",
    icon: web,
  },
  {
    title: "Gen AI",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Competitive Programming",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "PaperPilot",
    company_name: "Research Paper Recommendation",
    icon: research,
    iconBg: "#383E56",
    points: [
      "Built a real-time deep learning pipeline for recommending research papers and predicting subjects using transformer-based LLMs, improving subject prediction accuracy by 30%.",
      "CStandardized architecture across teams, empowering 15+ developers to contribute efficiently and enhancing collaboration on AI solution development.",
      "Optimized semantic search and classification with FastAPI, HuggingFace Transformers, and MongoDB, significantly boosting user search efficiency andApplied advanced techniques like prompt engineering, topic modeling, and transfer learning for enhanced model performance.",
    ],
  },
  {
    title: "Translatify",
    company_name: "Multilingual Language Translator Web App",
    icon: translate,
    iconBg: "#E6DEDD",
    points: [
      "Developed a web-based translation app leveraging the Google Translate API to support seamless, real-time multilingual communication.",
      "Optimized performance to handle 10,000+ user queries/month, maintaining an average response time of under 2 seconds.",
      "Enhanced user experience through intuitive UI and efficient API integration, enabling instant and accurate language conversion.",
    ],
  },
  {
    title: "CampusMate",
    company_name: "College-Chatbot",
    icon: chatbot,
    iconBg: "#E6DEDD",
    points: [
      "Designed a real-time chatbot using Retrieval-Augmented Generation (RAG) to assist students with queries about academics, campus services, and events in multiple languages.",
      "Developed a full-stack solution using React, JavaScript, Python (FastAPI/Flask), and NLP tools to deliver a smooth and responsive user experience.",
      "Enhanced chatbot accuracy and response relevance by integrating semantic search, language detection, and prompt tuning techniques tailored for college-specific data.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "IIT Guwahati Hackathon",
    description:
      "Finalist, ETHOS IIT Guwahati Hackathon – Led a team of 4 to develop an AI-powered solution, improving automation efficiency by 40%, demonstrating strong technical and leadership abilities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hackiit,
    source_code_link: "https://www.linkedin.com/posts/divyanshtiwari22_finalist-at-ethos-a-nationwide-hackathon-activity-7275360272465199105-n1kI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFXiiNUBUtP5oKFT0neCYc0mCYkzgr5nAmY",
  },
  {
    name: "Amazon ML Challenge ",
    description:
      "Rank 191, Amazon ML Challenge 2024 – Led team Enigma Learners to achieve Rank 191 with an accuracy of 46.21%, expanding a feature extraction model using image processing and deep learning.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: amaze,
    source_code_link: "https://github.com/Divyanshtiwari1/Amazon_ml_challenge",
  },
  {
    name: "NVIDIA Certification",
    description:
      "Certified in Transformer-Based NLP Applications – NVIDIA – Gained expertise in building NLP solutions using transformers, later applying these skills to improve accuracy by 10% .",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nvidia,
    source_code_link: "https://www.linkedin.com/posts/divyanshtiwari22_earned-a-certificate-of-competency-for-demonstrating-activity-7275362073759428608-CzyH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFXiiNUBUtP5oKFT0neCYc0mCYkzgr5nAmY",
  },
];

export { services, technologies, experiences, testimonials, projects };
