import React, { useState } from "react";
import { motion } from "framer-motion";
import Labels from "../components/Labels";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Intro from "../components/Intro";
import Modal from "../components/Modal";
import NavBar from "../components/NavBar";

const IndexPage = () => {
  const [showModal, setShowModal] = useState(null);
  const handleChange = (value) => {
    // debugger
    setShowModal(value);
  };
  return (
    <main>
      {/* background: linear-gradient(#3b82f6, #6e */}
      {/* This section has to be redone */}
      <Modal showModal={showModal} setShowModal={handleChange} />
      {/* <NavBar /> */}
      <Intro />
      <Labels />
      <Projects setShowModal={handleChange} showModal={showModal} />
      {/* REMOVE */}
      {/* <AboutMe /> */}
    </main>
  );
};

export default IndexPage;
