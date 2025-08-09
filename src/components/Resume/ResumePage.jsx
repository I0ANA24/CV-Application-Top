import React from "react";
import PersonalDetailsPageSection from "../PersonalDetails/PersonalDetailsPageSection";
import SkillsPageSection from "../Skills/SkillsPageSection";

const ResumePage = ({ details, skills }) => {
  return (
    <section className="bg-white w-full max-w-[80vw] lg:w-[50%] aspect-[210/297] lg:aspect-[210/297] shadow-neutral-400 shadow-lg mx-auto px-10 py-6 overflow-hidden space-y-4">
      <PersonalDetailsPageSection details={details} />
      <SkillsPageSection skills={skills} />
    </section>
  );
};

export default ResumePage;
