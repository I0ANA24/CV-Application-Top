import React from "react";
import sectionsData from "./sectionsData";
import BuilderSectionDesign from "./BuilderSectionDesign";

const Builder = () => {
  return (
    <div className="w-full lg:max-w-[50%] min-h-screen space-y-4">
      <h1 className="text-2xl font-normal text-blue-900 pl-5">
        Resume Builder
      </h1>
      {sectionsData.map((item) => (
        <BuilderSectionDesign key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Builder;
