import React, { useState } from "react";

const ExpandCollapseSectionButton = ({ item, isOpen, onClick }) => {

  return (
    <button
      className={`w-full flex justify-between items-center p-5 text-2xl font-bold cursor-pointer`}
      onClick={onClick}
    >
      <h2>{item.name}</h2>
      <i className={`bx bx-chevron-${isOpen ? "up" : "down"} text-3xl`}></i>
    </button>
  );
};

export default ExpandCollapseSectionButton;
