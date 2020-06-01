import React from "react";
import Heading from "./components/Heading";
import List from "./components/List";

const Experience = ({
  bulletPoints = [],
  place,
  position,
  location,
  fromDate,
  toDate
}) => {
  return (
    <div className="experience mb-4">
      <div className="block md:flex justify-between items-baseline border-b mb-2">
        <Heading as="h3">
          {place}, {location}
        </Heading>
        <p className="experience-position">
          <span className="font-medium mr-2">{position}</span> {fromDate} -{" "}
          {toDate}
        </p>
      </div>
      <List className="experience-list">
        {bulletPoints.map(point => (
          <li className="item">{point}</li>
        ))}
      </List>
    </div>
  );
};

export default Experience;
