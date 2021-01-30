import React, { useEffect } from "react";
// import ScrollReveal from "scrollreveal";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutMe from "./AboutMe";

const Intro = ({ handleNavBar }) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -200 },
  };

  useEffect(() => {
    handleNavBar(inView);
  }, [handleNavBar, inView]);
  // useEffect(() => {
  //   ScrollReveal().reveal("#name", slideUp);
  // }, []);

  const variants2 = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <section className="w-full p-32 text-center" ref={ref}>
      <motion.h1
        // animate={{ rotate: 360 }}
        // transition={{ duration: 2 }}
        // animate={{ x: 100 }}
        // animate={{ x: 100 }}
        // transition={{ ease: "easeOut", duration: 2 }}
        initial="hidden"
        animate="visible"
        variants={variants}
        className="text-4xl mb-4"
      >
        Io sono{" "}
        <span className="text-6xl">
          {/* <span className="text-6xl" contentEditable> */}
          Simone Tedesco
        </span>
      </motion.h1>
      <motion.p
        custom={1}
        variants={variants2}
        animate="visible"
        initial="hidden"
      >
        Sono uno sviluppatore front-end specializzato nella realizzazione di web
        application.
      </motion.p>
      <motion.p
        custom={2}
        variants={variants2}
        animate="visible"
        initial="hidden"
      >
        Ho competenze approfondite in HTML5, CSS3 e JavaScript.
      </motion.p>
      <motion.p
        custom={3}
        variants={variants2}
        animate="visible"
        initial="hidden"
      >
        Sono sempre entusiasta nell&apos;imparare nuove tecnologie e
        nell&apos;approfondire quelle che già conosco.
      </motion.p>
      <AboutMe />
    </section>
  );
};

export default Intro;
