import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

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

export const SocialLink = ({ image, name, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <img
      src={image}
      alt={name}
      height="50px"
      width="50px"
      className="rounded-full bg-white"
    />
  </motion.a>
);

const AboutMe = () => (
  <div className="flex justify-evenly mt-4 pt-12" style={{ margin: "0 25%" }}>
    {list.map(({ image, name, link }) => {
      const id = Math.random().toString(36).slice(2);
      return <SocialLink key={id} image={image} name={name} link={link} />;
    })}
  </div>
);

export default AboutMe;

SocialLink.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
