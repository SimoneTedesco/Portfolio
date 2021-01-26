import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SocialLink from "./SocialLink";
import { list } from "./AboutMe";

const NavBar = ({ showNavBar }) => {
  const variants2 = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
      y: 0,
    }),
    hidden: { opacity: 0, y: -200 },
  };

  return (
    <>
      <AnimatePresence>
        {showNavBar && (
          <motion.nav
            className="sticky top-0 z-10 bg-black py-2 flex justify-between"
            // whileHover={{ paddingBottom: "30px" }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
          >
            {/* <motion.h1>{inView ? "<ST />" : "<SimoneTedesco />"}</motion.h1> */}
            <motion.h1>{false ? "<ST />" : "<SimoneTedesco />"}</motion.h1>
            {/* {!inView && (
            )} */}
            <motion.div className="flex gap-4">
              {list.map(({ image, name, link }, index) => {
                const id = Math.random().toString(36).slice(2);
                return (
                  <motion.span
                    key={id}
                    custom={index}
                    variants={variants2}
                    animate="visible"
                    initial="hidden"
                  >
                    <SocialLink image={image} name={name} link={link} />
                  </motion.span>
                );
              })}
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
      {/* <button type="button" onClick={() => setShowNavBar(!showNavBar)}>
        asd
      </button> */}
    </>
  );
};

export default NavBar;
