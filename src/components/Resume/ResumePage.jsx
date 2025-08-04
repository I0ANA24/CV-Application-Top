import React from "react";
import PersonalDetailsPageSection from "../PersonalDetails/PersonalDetailsPageSection";

const ResumePage = ({ details }) => {
  return (
    <section className="bg-white w-full max-w-[80vw] lg:w-[50%] aspect-[210/297] lg:aspect-[210/297] shadow-neutral-400 shadow-lg mx-auto px-10 py-6 overflow-hidden">
      <PersonalDetailsPageSection details={details} />
    </section>
  );
};

export default ResumePage;
