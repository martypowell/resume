import React from "react";
import data from "./data.json";
import Section from "./Section";
import SkillRow from "./SkillRow";
import Experience from "./Experience";
import ContactSection from "./ContactSection";
import TaglineSection from "./TaglineSection";
import useDocumentTitle from 'use-document-title';

export default function App() {
  const { skills = {}, experiences = [], tagline, contactInformation } = data;

  useDocumentTitle("Resume | Marty Powell, Senior Software Developer")

  return (
    <div className="App p-4 sm:p-8">
      <ContactSection {...contactInformation} />
      <TaglineSection {...tagline} />
      <Section title="Skills">
        {Object.keys(skills).map(skillKey => (
          <SkillRow key={skillKey} title={skillKey} skills={skills[skillKey]} />
        ))}
      </Section>
      <Section title="Experience">
        {experiences.map(experience => (
          <Experience {...experience} />
        ))}
      </Section>
      <div className="mb-8" />
      <style jsx global>{`
        body {
          max-width: 800px;
          margin: auto;
        }

        h1,
        h2,
        h3 {
          font-family: "Roboto Condensed", Sans-Serif;
        }

        p,
        li {
          font-family: "Cabin", Sans-Serif;
        }
      `}</style>
    </div>
  );
}
