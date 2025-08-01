import React, { useState } from "react";

const Input = ({ item, miniSection }) => {
  const [text, setText] = useState(item[miniSection].value);

  return (
    <input
      type={item[miniSection].type}
      id={`${item.id}-${miniSection}-input`}
      placeholder={item[miniSection].placeholder}
      value={text}
      className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
      onChange={(event) => setText(event.target.value)}
    />
  );
};

export default Input;
