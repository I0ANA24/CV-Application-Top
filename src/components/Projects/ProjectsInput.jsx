import React from "react";

const ProjectsInput = ({ project, setProject }) => {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="3-name">Project Name</label>
        <input
          type="text"
          id="3-name"
          placeholder="Enter the name of the project..."
          value={project.projectName}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setProject({ ...project, projectName: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="3-skills">Skills</label>
        <input
          type="text"
          id="3-skills"
          placeholder="Enter the skills used..."
          value={project.projectSkills}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setProject({ ...project, projectSkills: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="3-start">Start Date</label>
        <input
          type="date"
          id="3-start"
          value={project.projectStartDate}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setProject({ ...project, projectStartDate: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="3-end">End Date</label>
        <input
          type="date"
          id="3-end"
          value={project.projectEndDate}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setProject({ ...project, projectEndDate: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="3-description">Project Description</label>
        <textarea
          id="3-description"
          placeholder="Type here..."
          value={project.projectDescription}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none h-30"
          onChange={(event) =>
            setProject({ ...project, projectDescription: event.target.value })
          }
          required
        />
      </div>
    </>
  );
};

export default ProjectsInput;
