import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import TechStack from "./TechStack";

const ProjectCard = ({ image, name, techStack, __html }) => (
  <div className="p-8 bg-gray-500 rounded">
    <div
      style={{
        backgroundImage: `url(${image})`,
        height: "200px",
      }}
      className="bg-transparent bg-no-repeat bg-top transition-all delay-200 duration-1000 hover:bg-bottom"
    />
    <h3 className="text-2xl">{name}</h3>
    <TechStack list={techStack} />
    <div dangerouslySetInnerHTML={{ __html }} />
  </div>
);

const Projects = () => (
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
      <div>
        <h2 className="text-4xl mb-4">Projects</h2>
        <section className="grid grid-cols-4 gap-4 mb-16">
          {data.allMarkdownRemark.edges.map(({ node }) => {
            const { image, name, techStack } = node.frontmatter;
            return (
              <ProjectCard
                key={node.id}
                image={image}
                name={name}
                techStack={techStack}
                __html={node.html}
              />
            );
          })}
        </section>
      </div>
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
