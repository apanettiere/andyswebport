import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-secondary  bg-accent"
    : "text-secondary  bg-accent hover:border-secondary";
  return (
    <button
      className={`${buttonStyles} rounded-full px-6 py-2 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
