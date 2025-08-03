import React from "react";
import sectionsData from "./sectionsData";
import BuilderSectionDesign from "./BuilderSectionDesign";

const Builder = () => {
  return (
    <div className="w-full lg:w-[50%] space-y-4">
      {sectionsData.map((item) => (
        <BuilderSectionDesign key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Builder;
