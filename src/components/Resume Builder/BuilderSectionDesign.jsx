import React, { useState } from "react";
import Label from "./ui components/Label";
import Input from "./ui components/Input";
import ExpandCollapseSectionButton from "./ui components/ExpandCollapseSectionButton";

const BuilderSectionDesign = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full bg-white rounded-lg  shadow-lg overflow-hidden">
      <ExpandCollapseSectionButton
        item={item}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className={`${!isOpen ? "h-0 space-y-0 p-0" : "space-y-6 p-5"} w-full flex flex-col pt-0`}>
        {Object.keys(item).map((miniSection) => {
          if (miniSection === "id" || miniSection === "name") return null;
          return (
            <div
              className="w-full flex flex-col space-y-1"
              key={`${item.id}-${miniSection}`}
            >
              <Label
                item={item}
                miniSection={miniSection}
                key={`${item.id}-${miniSection}-label`}
              />
              <Input
                item={item}
                miniSection={miniSection}
                key={`${item.id}-${miniSection}-input`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuilderSectionDesign;
