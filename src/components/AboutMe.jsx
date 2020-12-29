import React from "react";
import ContactForm from "./ContactForm";

const list = [
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

const SocialLink = ({ image, name, link }) => (
  <div>
    <a href={link} target="_blank" rel="noreferrer">
      <img
        src={image}
        alt={name}
        height="50px"
        width="50px"
        className="rounded-full"
      />
    </a>
  </div>
);

const AboutMe = () => (
  <div>
    <h2 className="text-4xl">Contatti</h2>
    <div className="flex">
      <ContactForm />
      <div>
        {list.map(({ image, name, link }) => {
          const id = Math.random().toString(36).slice(2);
          return <SocialLink key={id} image={image} name={name} link={link} />;
        })}
      </div>
    </div>
  </div>
);

export default AboutMe;
