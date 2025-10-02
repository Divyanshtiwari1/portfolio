import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences as projectsData } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { research, translate, chatbot } from "../assets";

const experienceData = [
  {
    company: "Darwix AI",
    role: "AI Intern",
    duration: "Oct 2025 – Present",
    link: "https://www.darwix.ai/",
    description: [
      "Building an AI-powered calling agent using Django and Twilio, enabling automated voice interactions.",
      "Designing workflows for call handling, action point automation, and post-call follow-ups via SMS/email.",
      "Integrating AI/LLM pipelines for natural, efficient, and business-aligned conversations."
    ]
  },
  {
    company: "Solar Industries India Limited",
    role: "AI/ML Intern",
    duration: "Aug 2025 – Sep 2025",
    link: "https://solargroup.com/",
    description: [
      "Designed and deployed a full-stack Email Classifier System with two pipelines: Email Type Classifier (ML/NLP) and Status Updater.",
      "Built backend with Django REST Framework and FastAPI microservices; developed React frontend for email tracking.",
      "Prototyped lightweight model-serving with Flask, implemented RAG (LangChain/LangGraph) for contextual retrieval.",
      "Collaborated with teams to align solutions with business needs; created monitoring dashboards for API health and reliability."
    ]
  }
];

const ExperienceCard = ({ experience, index }) => {
  const projectIcons = [
    { id: 1, link: "https://github.com/Divyanshtiwari1/Deep-Learning-Based-Research-Paper-Recommendation-and-Subject-Prediction-Using-LLMs", icon: research },
    { id: 2, link: "https://github.com/Divyanshtiwari1/Language_Translator.github.io", icon: translate },
    { id: 3, link: "https://github.com/Divyanshtiwari1/College-Chatbot", icon: chatbot },
  ];
  const iconData = projectIcons[index % projectIcons.length];
  
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <a
            href={iconData.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={iconData.icon}
              alt={`logo-${iconData.id}`}
              className="w-full h-[60%] object-contain rounded-full"
            />
          </a>
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, i) => (
          <li
            key={`experience-point-${i}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      {/* Experience Section */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-md bg-[#1d1836] hover:shadow-lg transition"
            >
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-blue-400 hover:underline"
              >
                {exp.company}
              </a>
              <p className="text-white text-[18px] mt-1">{exp.role}</p>
              <p className="text-secondary text-sm mt-1">{exp.duration}</p>
              <ul className="list-disc ml-5 mt-4 space-y-2">
                {exp.description.map((point, i) => (
                  <li key={i} className="text-white-100 text-[14px] pl-1 tracking-wider">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <motion.div variants={textVariant()} className="mt-20">
        <p className={`${styles.sectionSubText} text-center`}>
          Projects I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {projectsData.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");