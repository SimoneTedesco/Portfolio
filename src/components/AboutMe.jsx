import React from "react";
import PropTypes from "prop-types";
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
  <a href={link} target="_blank" rel="noreferrer">
    <img
      src={image}
      alt={name}
      height="50px"
      width="50px"
      className="rounded-full bg-white"
    />
  </a>
);

const AboutMe = () => (
  <div>
    <h2 className="text-4xl mb-4">Contatti</h2>
    <div className="flex">
      <ContactForm />
      <div className="flex flex-col justify-evenly">
        {list.map(({ image, name, link }) => {
          const id = Math.random().toString(36).slice(2);
          return <SocialLink key={id} image={image} name={name} link={link} />;
        })}
      </div>
    </div>
  </div>
);

export default AboutMe;

SocialLink.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
