import React, { useState } from "react";
import { motion } from "framer-motion";
import Labels from "../components/Labels";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Modal from "../components/Modal";

const IndexPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <main>
      {/* background: linear-gradient(#3b82f6, #6e */}
      {/* This section has to be redone */}
      <Modal showModal={showModal} setShowModal={setShowModal} />
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
      <section className="h-screen w-full p-32 bg-blue-500">
        <h1 className="text-4xl mb-4">
          Io sono{" "}
          <span className="text-6xl">
            {/* <span className="text-6xl" contentEditable> */}
            Simone Tedesco
          </span>
        </h1>
        <p>
          Sono uno sviluppatore front-end specializzato nella realizzazione di
          web application.
        </p>
        <p>Ho competenze approfondite in HTML5, CSS3 e JavaScript.</p>
        <p>
          Sono sempre entusiasta nell&apos;imparare nuove tecnologie e
          nell&apos;approfondire quelle che già conosco.
        </p>
      </section>
      <Labels />
      <Projects setShowModal={setShowModal} />
      {/* REMOVE */}
      {/* <AboutMe /> */}
    </main>
  );
};

export default IndexPage;
