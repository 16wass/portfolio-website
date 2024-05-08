"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>
          < div className="flex items-center">
          Java 
          <Image src="/images/Skills logos/java-logo.png" width={50} height={50} alt="Java Logo" className="ml-2" />
          </div>
          </li>
        <li>
          <div className="flex items-center">
          Python
          <Image src="/images/Skills logos/Python-logo.png" width={35} height={35} alt="Python Logo" className="ml-2" />
          </div>
          </li>
          <li>
          <div className="flex items-center">
            React.js
            <Image src="/images/Skills logos/React-Logo.png" width={70} height={70} alt="React logo" className="mr-2" />
          </div>
        </li>
        <li>
          <div className="flex items-center">
          HTML, CSS , JavaScript
          <Image src="/images/Skills logos/Html Css Js.png" width={50} height={50} alt="HTML, CSS , JavaScript logo" className="ml-2" />
          </div>
          </li>
        
        <li>
          <div className="flex items-center">
          Node.js
          <Image src="/images/Skills logos/Node.js_logo.png" width={50} height={50} alt="Node logo" className="ml-2" />
          </div>
          </li>
        <li>
          <div className="flex items-center">
          Express.js
          <Image src="/images/Skills logos/Express js-logo.png" width={80} height={80} alt="Express logo" className="ml-2" />
          </div>
          </li>
        <li>
          <div className="flex items-center">
          MongoDB
          <Image src="/images/Skills logos/MongoDB_Logo.svg.png" width={70} height={70} alt="Mongodb logo" className="ml-2" />
          </div>
          </li>
        <li>
          <div className="flex items-center">
          Agile Methodologies (Scrum , Kanban)
          <Image src="/images/Skills logos/agile-method.png" width={50} height={50} alt="Agile logo" className="ml-2" /> 
          </div>
          </li>
        <li>
          <div className="flex items-center">
          Git/Github
          <Image src="/images/Skills logos/Git_icon..png" width={40} height={40} alt="Git " className="ml-2" />
          </div>
          </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="flex">
        <div>
          <ul className="list-disc pl-2">
            <li>Bachelor in information engineering from Technical University of Munich (TUM)</li>
          </ul>
        </div>
        <div>
          <Image src="/images/TUM_Logo.png" alt="Tum" width={300} height={300} />
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          
          Agile with Atlassian Jira -Scrum -Kanban</li>
        <li>Full Stack Open course ( University of Helsinki and Houston Inc ) </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image src="/images/about-image.png" alt="about_image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white texxt-base md:text-lg">
            I am a  computer science student with a passion for creating
            interactive and responsive web applications. I have experience
            working with  Python , Java , JavaScript, React, Redux, Node.js, Express, HTML, CSS, and Git.
            I have knowledge in Agile methodologies such as Scrum and Kanban for project management. 
            I am a quick learner and I am always looking to expand my knowledge and skill set.
            I am a team player and I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;