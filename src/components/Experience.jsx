import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { chatbot, meta, research, shopify, starbucks, tesla, translate } from "../assets";

const ExperienceCard = ({ experience, index }) => {
  const first = [
    { id: 1, link: "https://github.com/Divyanshtiwari1/Deep-Learning-Based-Research-Paper-Recommendation-and-Subject-Prediction-Using-LLMs", icon: research  },
    { id: 2, link: "https://github.com/Divyanshtiwari1/Language_Translator.github.io", icon: translate },
    { id: 3, link: "https://github.com/Divyanshtiwari1/College-Chatbot", icon: chatbot },
  ];

  const iconData = first[index % first.length];

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
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Projects I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
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
