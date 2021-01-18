import React, { useEffect, useState, useRef } from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import ScrollReveal from "scrollreveal";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import FocusTrap from "focus-trap-react";
import TechStack from "./TechStack";

const ProjectCard = ({
  id,
  image,
  name,
  techStack,
  __html,
  showModal,
  setShowModal,
}) => {
  const openModal = (e, selectedCard) => setShowModal(selectedCard);
  const closeModal = () => setShowModal(null);

  const openModalEnter = (e, selectedCard) => {
    if (e.key === "Enter") {
      openModal(e, selectedCard);
    }
  };
  const closeModalEsc = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };
  return (
    <>
      <motion.li
        className="p-8 bg-gray-500 rounded"
        onClick={(e) => openModal(e, name)}
        onKeyDown={(e) => openModalEnter(e, name)}
        layoutId={name}
        tabIndex={0}
      >
        <motion.div
          style={{
            backgroundImage: `url(${image}?nf_resize=fit&w=250)`,
            height: "200px",
          }}
          // className="bg-transparent bg-cover bg-no-repeat bg-top cover-transition hover:bg-bottom transform hover:scale-110"
          className="bg-transparent bg-cover bg-no-repeat bg-top hover:scale-110"
          // onClick={() => setShowModal(true)}
        />
        <motion.h3 className="text-2xl">{name}</motion.h3>
        <TechStack list={techStack} />
        {/* <motion.div dangerouslySetInnerHTML={{ __html }} /> */}
      </motion.li>
    </>
  );
};

const renderFullCard = (showModal, { node }) => {
  const {
    id,
    html: __html,
    frontmatter: { image, name, startDate, endDate, techStack } = {},
  } = node;
  return (
    <motion.div
      // className="p-8 bg-gray-500 rounded overlay"
      className="p-8 bg-gray-500 rounded absolute inset-0 m-auto overlay flex h-3/5"
      layoutId={showModal}
      // onClick={closeModal}
      // onKeyDown={closeModalEsc}
    >
      {/* <motion.button onClick={closeModal}>x</motion.button> */}
      {/* <motion.div
        style={{
          backgroundImage: `url(${image}?nf_resize=fit&w=250)`,
          height: "200px",
        }}
        className="bg-transparent bg-cover bg-no-repeat bg-top cover-transition hover:bg-bottom transform hover:scale-110"
      /> */}
      <motion.img src={`${image}?nf_resize=fit&w=500`} alt={name} />
      <motion.div>
        <motion.h3 className="text-2xl">{name}</motion.h3>
        <TechStack list={techStack} />
        <motion.div dangerouslySetInnerHTML={{ __html }} />
      </motion.div>
    </motion.div>
  );
};

const Projects = ({ showModal, setShowModal }) => (
  // #region
  // useEffect(() => {
  //   setInterval(() => {
  //     setShowModal(true);
  //   }, 4000);
  // }, [setShowModal]);
  // useEffect(() => {
  //   ScrollReveal().reveal(".grid.grid-cols-1 div.p-8:nth-child(odd)", {
  //     interval: 200,
  //     // reset: true,
  //   });
  //   ScrollReveal().reveal(".grid.grid-cols-1 div.p-8:nth-child(even)", {
  //     interval: 200,
  //     // reset: true,
  //     delay: 400,
  //   });
  // }, []);
  // #endregion

  <StaticQuery
    query={graphql`
      query getAllProjects {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/projects/" } }
          sort: { fields: frontmatter___startDate, order: DESC }
          limit: 8
        ) {
          edges {
            node {
              id
              html
              frontmatter {
                image
                name
                startDate
                techStack
                endDate
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className="h-full w-full p-32 bg-red-400">
        <h2 className="text-4xl mb-4">Projects</h2>
        <AnimateSharedLayout type="crossfade">
          <ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 relative"
            id="projects"
            tabIndex={-1}
          >
            {data.allMarkdownRemark.edges.map(({ node }) => {
              const { image, name, techStack } = node.frontmatter;
              return (
                <ProjectCard
                  key={node.id}
                  id={node.id}
                  image={image}
                  name={name}
                  techStack={techStack}
                  __html={node.html}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              );
            })}

            <AnimatePresence exitBeforeEnter>
              {showModal && (
                <FocusTrap
                  focusTrapOptions={{
                    fallbackFocus: "body",
                    allowOutsideClick: true,
                  }}
                >
                  {renderFullCard(
                    showModal,
                    data.allMarkdownRemark.edges.find(
                      ({ node }) => node.frontmatter.name === showModal
                    )
                  )}
                </FocusTrap>
              )}
            </AnimatePresence>
          </ul>
        </AnimateSharedLayout>
      </section>
    )}
  />
);
export default Projects;

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  techStack: PropTypes.string.isRequired,
  __html: PropTypes.string.isRequired,
};
