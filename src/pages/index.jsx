import React, { useState } from "react";
import Labels from "../components/Labels";
import Projects from "../components/Projects";
import Intro from "../components/Intro";
import Modal from "../components/Modal";
import NavBar from "../components/NavBar";

const IndexPage = () => {
  const [showModal, setShowModal] = useState(null);
  const [showNavBar, setShowNavBar] = useState(false);
  const handleChange = (value) => {
    setShowModal(value);
  };
  const handleNavBar = (value) => {
    if (showNavBar === value) {
      setShowNavBar(!value);
    }
  };

  return (
    // TODO mettere un bg dello stesso colore della prima section, bug navbar scroll top
    <main>
      {/* background: linear-gradient(#3b82f6, #6e */}
      {/* This section has to be redone */}
      <Modal showModal={showModal} setShowModal={handleChange} />
      <NavBar showNavBar={showNavBar} />
      <Intro handleNavBar={handleNavBar} />
      <Labels />
      <Projects setShowModal={handleChange} showModal={showModal} />
      {/* REMOVE */}
      {/* <AboutMe /> */}
    </main>
  );
};

export default IndexPage;
