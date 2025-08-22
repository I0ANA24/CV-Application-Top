import React from "react";

const EducationInput = ({ education, setEducation }) => {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="4-degree">Degree</label>
        <input
          type="text"
          id="4-degree"
          placeholder="Ex: Bachelor of Arts (BA) in Computer Science"
          value={education.degree}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setEducation({ ...education, degree: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="4-name">University Name</label>
        <input
          type="text"
          id="4-name"
          placeholder="Ex: University of Tokyo"
          value={education.name}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setEducation({ ...education, name: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="4-location">Location</label>
        <input
          type="text"
          id="4-location"
          placeholder="Ex: Tokyo, Japan"
          value={education.location}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setEducation({ ...education, location: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="4-start">Start Date</label>
        <input
          type="date"
          id="4-start"
          value={education.startDate}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setEducation({ ...education, startDate: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="4-end">End Date</label>
        <input
          type="date"
          id="4-end"
          value={education.endDate}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setEducation({ ...education, endDate: event.target.value })
          }
          required
        />
      </div>
    </>
  );
};

export default EducationInput;
