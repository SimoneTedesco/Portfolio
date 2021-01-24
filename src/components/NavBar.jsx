import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SocialLink from "./SocialLink";
import { list } from "./AboutMe";

const NavBar = () => {
  console.log("test");

  const [showNavBar, setShowNavBar] = useState(true);
  return (
    <>
      <AnimatePresence>
        {showNavBar && (
          <motion.nav
            className="sticky top-0 bg-black py-2 flex justify-between"
            // whileHover={{ paddingBottom: "30px" }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
          >
            {/* <motion.h1>{inView ? "<ST />" : "<SimoneTedesco />"}</motion.h1> */}
            <motion.h1>{false ? "<ST />" : "<SimoneTedesco />"}</motion.h1>
            {/* {!inView && (
            )} */}
            <div className="flex">
              {list.map(({ image, name, link }) => {
                const id = Math.random().toString(36).slice(2);
                return (
                  <SocialLink key={id} image={image} name={name} link={link} />
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <button type="button" onClick={() => setShowNavBar(!showNavBar)}>
        asd
      </button>
    </>
  );
};

export default NavBar;
