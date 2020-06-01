import React from "react";
import Section from "./Section";
import Heading from "./components/Heading";
import Link from "./components/Link";

const ContactSection = ({ name, position, email, location, websites }) => (
  <Section>
    <Heading as="h1">{name}</Heading>
    <p className="text-xl">{position}</p>
    <p>{location}</p>
    <p>
      <Link href={`mailto:${email}`}>{email}</Link>
    </p>
    <ul>
      {websites.map(({ title, url }) => (
        <li>
          <Link href={url}>{title}</Link>
        </li>
      ))}
    </ul>
  </Section>
);

export default ContactSection;
