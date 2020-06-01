import React from "react";

const List = ({ children, className, ...rest }) => (
  <ul className={`${className ? `${className} ` : ""}list-disc ml-8`} {...rest}>
    {children}
  </ul>
);

export default List;
