import React from "react";

const AddButton = ({ itemId }) => {
  return (
    <button
      className={`${
        itemId !== 1
          ? "w-20 mt-4 bg-green-600 hover:bg-green-600/90 cursor-pointer rounded-full text-white text-sm py-1"
          : "hidden -margin-y-4"
      }`}
    >
      Add
    </button>
  );
};

export default AddButton;
