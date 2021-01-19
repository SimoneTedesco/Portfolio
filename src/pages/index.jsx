import React, { useState } from "react";
import { motion } from "framer-motion";
import Labels from "../components/Labels";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Intro from "../components/Intro";
import Modal from "../components/Modal";

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
      <nav className="sticky top-0 bg-transparent">
        <motion.h1
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          &lt;SimoneTedesco /&gt;
        </motion.h1>
      </nav>
      <Intro />
      <Labels />
      <Projects setShowModal={handleChange} showModal={showModal} />
      {/* REMOVE */}
      {/* <AboutMe /> */}
    </main>
  );
};

export default IndexPage;
