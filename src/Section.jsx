import React from "react";
import Heading from "./components/Heading";

const Section = ({ title, children, ...rest }) => (
  <section className="section mb-4" {...rest}>
    <Heading as="h2">{title}</Heading>
    <div className="section-content">{children}</div>
  </section>
);

export default Section;
