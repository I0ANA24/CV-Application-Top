import React from "react";

const Label = ({ item, miniSection }) => {
  return (
    <label
      htmlFor={`${item.id}-${miniSection}-input`}
      className="pl"
    >
      {item[miniSection].label}
    </label>
  );
};

export default Label;
