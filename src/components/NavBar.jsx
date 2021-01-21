import React from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  console.log("test");
  return (
    <nav className="sticky top-0 bg-transparent">
      <motion.h1>{inView ? "<ST />" : "<SimoneTedesco />"}</motion.h1>
      {!inView && (
        <div>
          {list.map(({ image, name, link }) => {
            const id = Math.random().toString(36).slice(2);
            return (
              <SocialLink key={id} image={image} name={name} link={link} />
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
