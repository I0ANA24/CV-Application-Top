import React, { useState } from "react";
import ExpandCollapseSectionButton from "../ui components/ExpandCollapseSectionButton";
import SkillsInput from "./SkillsInput";
import AddButton from "../ui components/AddButton";
import DynamicList from "../ui components/DynamicList";
AddButton;

const SkillsBuilder = ({ skillsList, setSkillsList }) => {
  const handleEdit = () => {
    setSkillsList((prevList) =>
      prevList.map((item) =>
        item.id === selectedId ? { ...item, skillName: skill.skillName } : item
      )
    );
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [skill, setSkill] = useState({
    id: crypto.randomUUID(),
    skillName: "",
  });

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
            skill={skill}
            setSkill={setSkill}
            skillsList={skillsList}
            setSkillsList={setSkillsList}
            isOpen={isOpen}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </form>
        <DynamicList
          list={skillsList}
          name={"skillName"}
          skill={skill}
          setSkill={setSkill}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      </div>
    </section>
  );
};

export default SkillsBuilder;
