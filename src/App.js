import React, { useRef } from "react";
import data from "./data.json";
import Section from "./Section";
import SkillRow from "./SkillRow";
import Experience from "./Experience";
import ContactSection from "./ContactSection";
import TaglineSection from "./TaglineSection";
import jsPDF from "jspdf";

export default function App() {
  const appBodyElm = useRef(null);
  const { skills = {}, experiences = [], tagline, contactInformation } = data;

  const handleSave = () => {
    // See https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html
    const doc = new jsPDF({
      orientation: "p",
      unit: "pt",
      format: "letter"
    });
    // HTML element to render, using React's API for accessing DOM elements:
    // https://reactjs.org/docs/refs-and-the-dom.html
    const element = appBodyElm.current;
    const margins = {
      left: 40,
      top: 40,
      bottom: 40
    };
    const options = {
      width: 522
    };
    // See example usage from repo: https://github.com/MrRio/jsPDF/blob/b9f932cd2e22c82db0a39f0225521945a2568809/examples/basic.html#L357
    // DOM element, x pos to render on page, y pos to render on page, callback, options
    doc.fromHTML(
      element,
      margins.left,
      margins.top,
      options,
      () => {},
      margins
    );
    doc.save("martypowell-resume.pdf");
  };

  return (
    <div className="App p-4 sm:p-8" ref={appBodyElm}>
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
      <button
        onClick={handleSave}
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
      >
        <svg
          class="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Download as PDF</span>
      </button>
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
