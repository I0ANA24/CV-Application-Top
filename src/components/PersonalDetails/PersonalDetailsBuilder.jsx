import React, { useState } from "react";
import ExpandCollapseSectionButton from "../ui components/ExpandCollapseSectionButton";
import PersonalDetailsInput from "./PersonalDetailsInput";

const PersonalDetailsBuilder = ({ detailsList, setDetailsList }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="w-full bg-white rounded-lg  shadow-lg overflow-hidden">
      <ExpandCollapseSectionButton
        sectionName="Personal Details"
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />

      <div
        className={`${
          !isOpen ? "h-0 p-0" : "p-5"
        } w-full flex flex-col pt-0 space-y-4`}
      >
        <PersonalDetailsInput detailsList={detailsList} setDetailsList={setDetailsList} />
      </div>
    </section>
  );
};

export default PersonalDetailsBuilder;
