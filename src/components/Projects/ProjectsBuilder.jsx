import React, { useState } from "react";
import ExpandCollapseSectionButton from "../ui/ExpandCollapseSectionButton";
import ProjectsInput from "./ProjectsInput";
import AddButton from "../ui/AddButton";
import DynamicList from "../ui/DynamicList";
import { areAllFieldsFilled } from "../../utils/inputValidation";
import { addObject, handleEdit } from "../../utils/objectEdit";
import SectionForm from "../ui/SectionForm";

const ProjectsBuilder = ({ projectsList, setProjectsList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [project, setProject] = useState({
    id: crypto.randomUUID(),
    projectName: "",
    projectSkills: [],
    projectStartDate: "",
    projectEndDate: "",
    projectDescription: "",
  });

  const expandCollapseSectionButtonProps = {
    sectionName: "Projects",
    isOpen: isOpen,
    onClick: () => setIsOpen(!isOpen),
  };

  const handleEditArgs = [
    project,
    setProjectsList,
    selectedId,
    setSelectedId,
    setProject,
  ];

  const addObjectArgs = [project, setProject, projectsList, setProjectsList];

  const addButtonProps = {
    object: project,
    setObject: setProject,
    setObjectsList: setProjectsList,
    selectedId: selectedId,
    setSelectedId: setSelectedId,
    objectName: "projectName",
  };

  const dynamicListProps = {
    list: projectsList,
    name: "projectName",
    setFunction: setProject,
    setSelectedId: setSelectedId,
  };

  return (
    <SectionForm
      isOpen={isOpen}
      expandProps={expandCollapseSectionButtonProps}
      selectedId={selectedId}
      object={project}
      handleEditArgs={handleEditArgs}
      addObjectArgs={addObjectArgs}
      objectsInputComponent={
        <ProjectsInput project={project} setProject={setProject} />
      }
      addButtonProps={addButtonProps}
      dynamicListProps={dynamicListProps}
    />
  );
};

export default ProjectsBuilder;
