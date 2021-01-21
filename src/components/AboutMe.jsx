import React from "react";
import ContactForm from "./ContactForm";
import SocialLink from "./SocialLink";

export const list = [
  {
    name: "LinkedIn",
    image: "/images/angular_simple.svg",
    link: "https://brand.linkedin.com/downloads",
  },
  {
    name: "GitHub",
    image: "/images/css3.svg",
    link: "https://github.com/logos",
  },
  {
    name: "Instagram",
    image: "/images/less.svg",
    link: "https://en.instagram-brand.com/assets/icons",
  },
];

const AboutMe = () => (
  <div className="flex justify-evenly mt-4 pt-12" style={{ margin: "0 25%" }}>
    {list.map(({ image, name, link }) => {
      const id = Math.random().toString(36).slice(2);
      return <SocialLink key={id} image={image} name={name} link={link} />;
    })}
  </div>
);

export default AboutMe;
