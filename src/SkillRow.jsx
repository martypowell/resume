import React from "react";
import Heading from "./components/Heading";

const SkillRow = ({ title, skills = [] }) => {
  return (
    <div className="mb-4">
      <Heading as="h3">{title}</Heading>
      <ul className="list-disc ml-8 sm:list-none sm:ml-0 sm:grid grid-flow-row grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
        {skills.map(skill => (
          <li className=" sm:py-1 sm:px-3 sm:border sm:border-solid sm:rounded">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillRow;
