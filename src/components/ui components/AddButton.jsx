import React from "react";

const AddButton = ({
  skill,
  setSkill,
  skillsList,
  setSkillsList,
  selectedId,
  setSelectedId,
  isCancelled,
  setIsCancelled,
}) => {
  return (
    <div className="flex gap-2">
      <button
        type="submit"
        className="w-20 bg-green-600 hover:bg-green-600/90 cursor-pointer rounded-full text-white text-sm font-medium py-1 transition-colors duration-100"
      >
        {selectedId ? "Save" : "Add"}
      </button>

      <button
        type="button"
        className={`${
          !selectedId
            ? "hidden"
            : "w-20 bg-neutral-400 hover:bg-neutral-400/80 cursor-pointer rounded-full text-white text-sm font-medium py-1 transition-colors duration-100"
        }`}
        onClick={() => {
          setSelectedId(null);
          setSkill({
            ...skill,
            id: crypto.randomUUID(),
            skillName: "",
          });
        }}
      >
        Cancel
      </button>

      <button
        type="button"
        className={`${
          !selectedId
            ? "hidden"
            : "w-20 bg-red-700 hover:bg-red-600 cursor-pointer rounded-full text-white text-sm font-medium py-1 transition-colors duration-100"
        }`}
        onClick={() => {
          setSkillsList((prevList) => {
            return prevList.filter((item) => item.id !== skill.id);
          });

          setSelectedId(null);
          setSkill({
            ...skill,
            id: crypto.randomUUID(),
            skillName: "",
          });
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default AddButton;
