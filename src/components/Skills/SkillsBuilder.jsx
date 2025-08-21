import React, { useState } from "react";
import ExpandCollapseSectionButton from "../ui/ExpandCollapseSectionButton";
import SkillsInput from "./SkillsInput";
import AddButton from "../ui/AddButton";
import DynamicList from "../ui/DynamicList";
AddButton;

const SkillsBuilder = ({ skillsList, setSkillsList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [skill, setSkill] = useState({
    id: crypto.randomUUID(),
    skillName: "",
  });

  const handleEdit = () => {
    setSkillsList((prevList) =>
      prevList.map((item) =>
        item.id === selectedId ? { ...item, skillName: skill.skillName } : item
      )
    );
  };

  return (
    <section className="w-full bg-white rounded-lg  shadow-lg overflow-hidden">
      <ExpandCollapseSectionButton
        sectionName="Skills"
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />

      <div
        className={`${
          !isOpen ? "h-0 p-0" : "p-5 pb-8"
        } w-full flex flex-col pt-0 space-y-4`}
      >
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (selectedId) {
              if (skill.skillName) {
                handleEdit();
                setSelectedId(null);
                setSkill({
                  ...skill,
                  id: crypto.randomUUID(),
                  skillName: "",
                });
              }
            } else {
              if (skill.skillName) {
                setSkill({ ...skill, id: crypto.randomUUID() });
                setSkillsList([...skillsList, skill]);
                setSkill({
                  ...skill,
                  id: crypto.randomUUID(),
                  skillName: "",
                });
              }
            }
          }}
          className={`${
            !isOpen ? "h-0 p-0" : ""
          } w-full flex flex-col pt-0 space-y-4`}
        >
          <SkillsInput skill={skill} setSkill={setSkill} />
          <AddButton
            object={skill}
            setObject={setSkill}
            setObjectsList={setSkillsList}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            objectName="skillName"
          />
        </form>
        <DynamicList
          list={skillsList}
          name={"skillName"}
          setFunction={setSkill}
          setSelectedId={setSelectedId}
        />
      </div>
    </section>
  );
};

export default SkillsBuilder;
