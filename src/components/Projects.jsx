import React from "react";
import { StaticQuery, graphql } from "gatsby";
import TechStack from "./TechStack";

const ProjectCard = ({ info: { image, name, techStack }, __html }) => (
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
        <h2 className="text-4xl">Projects</h2>
        <div className="grid grid-cols-4 gap-4">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <ProjectCard
              key={node.id}
              info={node.frontmatter}
              __html={node.html}
            />
          ))}
        </div>
      </div>
    )}
  />
);
export default Projects;
