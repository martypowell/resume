import React from "react";
import classnames from "classnames";

const Link = ({ children, className, ...rest }) => {
  return (
    <a
      className={classnames(
        className,
        "underline transition duration-700 text-blue-500 hover:text-blue-700"
      )}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Link;
