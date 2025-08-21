import React from "react";

const ProjectsPageSection = ({ projects }) => {
  return (
    <section className={!projects.length ? "hidden" : null}>
      <h2 className="font-medium text-lg">Projects</h2>
      <hr className="mb-2" />
      <div className="w-full flex flex-wrap overflow-hidden">
        {projects.map((project, index) => (
          <div className="w-full mb-2" key={index}>
            {/* introduction */}
            <div className="w-full flex justify-between items-center mb-[2px]">
              <h3 className="font-medium text-md">{project.projectName}</h3>
              <p className="font-normal text-sm">
                {new Date(project.projectStartDate).toLocaleString("en-US", {
                  month: "short",
                  year: "numeric",
                })}{" "}
                -{" "}
                {new Date(project.projectEndDate).toLocaleString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>

            {/* skills */}
            <div className="text-sm">
              <p className="font-medium inline">Skills:&nbsp;</p>
              <p className="font-normal inline">{project.projectSkills}</p>
            </div>
            
            {/* description */}
            <div className="text-sm">
              <p className="font-medium inline">Description:&nbsp;</p>
              <p className="font-normal inline">{project.projectDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPageSection;
