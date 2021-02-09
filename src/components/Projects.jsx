import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import FocusTrap from "focus-trap-react";
import TechStack from "./TechStack";

const ProjectCard = ({
  // id,
  image,
  name,
  techStack,
  // showModal,
  setShowModal,
}) => {
  const openModal = (e, selectedCard) => setShowModal(selectedCard);
  // const closeModal = () => setShowModal(null);

  const openModalEnter = (e, selectedCard) => {
    if (e.key === "Enter") {
      openModal(e, selectedCard);
    }
  };
  // const closeModalEsc = (e) => {
  //   if (e.key === "Escape") {
  //     closeModal();
  //   }
  // };
  return (
    <>
      <motion.li
        className="bg-secondary flex flex-col justify-between max-w-xs rounded w-full"
        onClick={(e) => openModal(e, name)}
        onKeyDown={(e) => openModalEnter(e, name)}
        layoutId={name}
        tabIndex={0}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          // style={{
          //   backgroundImage: `url(${image}?nf_resize=fit&w=250)`,
          //   height: "200px",
          // }}
          // className="bg-transparent bg-cover bg-no-repeat bg-top cover-transition hover:bg-bottom transform hover:scale-110"
          // className="bg-transparent bg-cover bg-no-repeat bg-top hover:scale-110"
          // className="flex h-56 items-center justify-center overflow-hidden rounded-md"
          className="flex h-56"
          // onClick={() => setShowModal(true)}
        >
          <motion.img
            src={`${image}?nf_resize=fit&w=250`}
            alt={name}
            className="w-full object-cover object-top"
          />
        </motion.div>
        <motion.h3 className="text-2xl text-primary">{name}</motion.h3>
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
    frontmatter: { image, name, techStack } = {},
    // frontmatter: { image, name, startDate, endDate, techStack } = {},
  } = node;
  return (
    <motion.div
      key={id}
      // exit={{ opacity: 0 }}
      // className="p-8 bg-gray-500 rounded overlay"
      className="p-8 bg-secondary rounded absolute inset-0 m-auto overlay flex h-3/5"
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
      <motion.div className="overflow-hidden w-1/2">
        <motion.img src={`${image}?nf_resize=fit&w=500`} alt={name} />
      </motion.div>
      <motion.div>
        <motion.h3 className="text-2xl">{name}</motion.h3>
        <TechStack list={techStack} />
        <motion.div dangerouslySetInnerHTML={{ __html }} />
      </motion.div>
    </motion.div>
  );
};

const Projects = ({ showModal, setShowModal }) => (
  // useEffect(() => {
  //   ScrollReveal().reveal(".grid.grid-cols-1 li.p-8");
  // }, []);

  // limit: 8
  <StaticQuery
    query={graphql`
      query getAllProjects {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/projects/" } }
          sort: { fields: frontmatter___startDate, order: DESC }
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
      <section className="max-w-5xl px-6 mx-auto text-center">
        {/* <section className="h-full w-full p-32 text-center "> */}
        <h2 className="text-4xl mb-4">Projects</h2>
        <AnimateSharedLayout type="crossfade">
          <ul
            // className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 relative"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 relative"
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

Projects.propTypes = {
  showModal: PropTypes.string,
  setShowModal: PropTypes.func.isRequired,
};

Projects.defaultProps = {
  showModal: null,
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  setShowModal: PropTypes.func.isRequired,
  // __html: PropTypes.string.isRequired,
};
