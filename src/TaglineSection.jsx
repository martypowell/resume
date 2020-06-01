import React from "react";
import Section from "./Section";
import Heading from "./components/Heading";
import List from "./components/List";

const TaglineSection = ({ summary = [], headline }) => (
  <Section>
    <Heading as="h2">{headline}</Heading>
    <List>
      {summary.map(item => (
        <li key={item}>{item}</li>
      ))}
    </List>
  </Section>
);

export default TaglineSection;
