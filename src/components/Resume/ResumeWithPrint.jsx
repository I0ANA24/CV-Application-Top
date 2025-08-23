import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ResumePage from "./ResumePage";

const ResumeWithPrint = ({ details, skills, projects, work, education }) => {
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "My Resume",
  });

  return (
    <div>

      {/* aici pui conținutul paginat */}
      <div ref={printRef}>
        <ResumePage
          details={details}
          skills={skills}
          projects={projects}
          work={work}
          education={education}
        />
      </div>
      <button
        onClick={handlePrint}
        className="px-5 py-2 bg-blue-800 hover:bg-blue-700 cursor-pointer text-white font-medium rounded-full mb-4 transition-all duration-300"
      >
        Download PDF
      </button>
    </div>
  );
};

export default ResumeWithPrint;
