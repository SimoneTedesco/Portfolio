import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const SocialLink = ({ image, name, link }) => (
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

export default SocialLink;

SocialLink.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
