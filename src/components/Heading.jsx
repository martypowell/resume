import React from "react";
import classnames from "classnames";

const Heading = ({
  children,
  className: classNameFromProps,
  as: As,
  ...rest
}) => {
  let headingStyles = "";
  switch (As.toLowerCase()) {
    case "h1":
      headingStyles = "text-4xl";
      break;
    case "h2":
      headingStyles = "text-xl sm:text-2xl";
      break;
    case "h3":
      headingStyles = "text-base sm:text-xl mb-1";
      break;
    default:
      headingStyles = "text-base";
  }
  const className = classnames(classNameFromProps, headingStyles);
  return (
    <As className={className} {...rest}>
      {children}
    </As>
  );
};

export default Heading;
