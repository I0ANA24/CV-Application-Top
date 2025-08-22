import React, { useState } from "react";
import PersonalDetailsBuilder from "../PersonalDetails/PersonalDetailsBuilder";
import SkillsBuilder from "../Skills/SkillsBuilder";
import ProjectsBuilder from "../Projects/ProjectsBuilder";
import ResumePage from "../Resume/ResumePage";

const Builder = () => {
  const [detailsList, setDetailsList] = useState({
    fullName: "Ioana Franț",
    address: "Iasi, Romania",
    phoneNumber: "+40761234567",
    email: "frantioana507@gmail.com",
    GitHub: "https://github.com/I0ANA24",
    LinkedIn: "https://www.linkedin.com/in/ioana-fran%C8%9B-949b70254/",
    personalWebsite: "",
  });

  const [skillsList, setSkillsList] = useState([
    {
      id: crypto.randomUUID(),
      skillName: "React",
    },
    {
      id: crypto.randomUUID(),
      skillName: "TailwindCSS",
    },
  ]);

  const [projectsList, setProjectsList] = useState([
    {
      id: crypto.randomUUID(),
      name: "YouTube Clone",
      skills: "HTML, CSS, JavaScript, React, TailwindCSS",
      startDate: "2025-03-22",
      endDate: "2025-03-30",
      description:
        "Developed a responsive YouTube clone using React and TailwindCSS, featuring video playback, search functionality, and interactive UI components to provide a seamless user experience across devices.",
      livePreview: "https://github.com/I0ANA24/CV-Application-Top",
      codePreview: "https://github.com/I0ANA24",
    },
    {
      id: crypto.randomUUID(),
      name: "E-commerce Website",
      skills: "HTML, CSS, JavaScript, React, TailwindCSS, NodeJS",
      startDate: "2025-04-18",
      endDate: "2025-06-03",
      description:
        "Developed a full-featured e-commerce website using React, TailwindCSS, and NodeJS, implementing product listings, shopping cart, user authentication, and responsive design for an optimal shopping experience.",
      livePreview: "https://github.com/I0ANA24/CV-Application-Top",
      codePreview: "https://github.com/I0ANA24",
    },
  ]);

  return (
    <main className="w-full flex flex-col gap-8 lg:flex-row">
      <section className="w-full lg:w-[50%] space-y-4">
        <PersonalDetailsBuilder
          detailsList={detailsList}
          setDetailsList={setDetailsList}
        />
        <SkillsBuilder skillsList={skillsList} setSkillsList={setSkillsList} />
        <ProjectsBuilder
          projectsList={projectsList}
          setProjectsList={setProjectsList}
        />
      </section>
      <ResumePage
        details={detailsList}
        skills={skillsList}
        projects={projectsList}
      />
    </main>
  );
};

export default Builder;
