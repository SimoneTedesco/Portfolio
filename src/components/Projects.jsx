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
  description,
  showModal,
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
        className={`bg-secondary flex flex-col justify-between max-w-xs rounded-xl w-full overflow-hidden focus:outline-none focus:shadow-focus hover:shadow-focus ${
          showModal && "filter-opacity"
        }`}
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
          className="flex h-48 pb-2"
          // onClick={() => setShowModal(true)}
        >
          <motion.img
            src={`${image}?nf_resize=fit&w=350`}
            alt={name}
            className="w-full object-contain p-6 object-center"
          />
        </motion.div>
        <motion.div className="px-2 py-8">
          <motion.h3 className="text-2xl text-primary font-bold">
            {name}
          </motion.h3>
          <motion.h4 className="text-xl text-gray-800">{description}</motion.h4>
        </motion.div>
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
      drag
      key={id}
      // exit={{ opacity: 0 }}
      // className="p-8 bg-gray-500 rounded overlay"
      // className="p-8 bg-secondary rounded-xl absolute inset-0 m-auto overlay flex h-3/5 text-primary"
      className="bg-secondary text-primary rounded-xl overlay-card flex h-full w-full pointer-events-auto p-4"
      layoutId={showModal}
      // onClick={(e) => false}
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
      <motion.div className="overflow-y-auto no-scrollbar rounded-xl w-1/2">
        <motion.img src={`${image}?nf_resize=fit&w=500`} alt={name} />
        {/* Might add slideshow thubnails here */}
      </motion.div>
      <motion.div className="flex flex-col p-2 w-1/2">
        <motion.h3 className="text-2xl">{name}</motion.h3>
        <motion.div
          className="overflow-y-auto"
          dangerouslySetInnerHTML={{ __html }}
        />
        <TechStack list={techStack} />
        <motion.div className="flex justify-end border-t p-2 mt-auto">
          <motion.a
            href="#"
            target="_blank"
            className="bg-accent hover:bg-accent2 py-1 px-4 text-secondary"
          >
            LINK
          </motion.a>
        </motion.div>
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
      <section className="max-w-6xl py-32 px-6 mx-auto text-center">
        {/* <section className="h-full w-full p-32 text-center "> */}
        <h2 className="text-4xl mb-8">Projects</h2>
        <AnimateSharedLayout type="crossfade">
          <div className="relative p-4">
            <ul
              // filter: blur(2px);
              // className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 relative"

              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
              id="projects"
              tabIndex={-1}
            >
              {data.allMarkdownRemark.edges.map(({ node }) => {
                const {
                  image,
                  name,
                  techStack,
                  description,
                } = node.frontmatter;
                return (
                  <ProjectCard
                    key={node.id}
                    id={node.id}
                    image={image}
                    name={name}
                    description={description || "short description"}
                    techStack={techStack}
                    __html={node.html}
                    showModal={showModal}
                    setShowModal={setShowModal}
                  />
                );
              })}
            </ul>

            <AnimatePresence exitBeforeEnter>
              {showModal && (
                <FocusTrap
                  focusTrapOptions={{
                    fallbackFocus: "body",
                    allowOutsideClick: true,
                  }}
                >
                  <>
                    <motion.div
                      className="absolute-full z-0 "
                      onClick={() => setShowModal(null)}
                    />
                    <motion.div className="absolute-full z-10 grid place-items-center pointer-events-none">
                      {renderFullCard(
                        showModal,
                        data.allMarkdownRemark.edges.find(
                          ({ node }) => node.frontmatter.name === showModal
                        )
                      )}
                    </motion.div>
                  </>
                </FocusTrap>
              )}
            </AnimatePresence>
          </div>
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
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  // __html: PropTypes.string.isRequired,
};
