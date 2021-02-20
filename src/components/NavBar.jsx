import React from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { StaticQuery, graphql } from "gatsby";
import SocialLink from "./SocialLink";

const NavBar = ({ showNavBar }) => (
  <StaticQuery
    query={graphql`
      query getAllSocialsNav {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/socials/" } }
        ) {
          edges {
            node {
              id
              frontmatter {
                name
                image
                link
              }
            }
          }
        }
      }
    `}
    render={(data) => {
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
                className="sticky top-0 z-20 bg-black py-2 flex justify-between"
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
                  {data.allMarkdownRemark.edges.map(({ node }, index) => {
                    const { image, name, link } = node.frontmatter;
                    return (
                      <motion.span
                        key={node.id}
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
        </>
      );
    }}
  />
);

export default NavBar;

NavBar.propTypes = {
  showNavBar: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    .isRequired,
};
