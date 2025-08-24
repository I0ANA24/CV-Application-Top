import React, { forwardRef } from "react";
import PersonalDetailsPageSection from "../PersonalDetails/PersonalDetailsPageSection";
import SkillsPageSection from "../Skills/SkillsPageSection";
import ProjectsPageSection from "../Projects/ProjectsPageSection";
import EducationPageSection from "../Education/EducationPageSection";
import WorkExperiencePageSection from "../WorkExperience/WorkExperiencePageSection";
import AutoPaginatedResume from "./AutoPaginatedResume";

const ResumePage = forwardRef(
  ({ details, skills, projects, work, education }, ref) => {
    return (
      <AutoPaginatedResume ref={ref}>
        <PersonalDetailsPageSection details={details} />
        <EducationPageSection education={education} />
        <SkillsPageSection skills={skills} />
        <ProjectsPageSection projects={projects} />
        <WorkExperiencePageSection work={work} />
      </AutoPaginatedResume>
    );
  }
);

export default ResumePage;
