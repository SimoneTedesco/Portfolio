import React from "react";
import { StaticQuery, graphql } from "gatsby";

const LIBS = [
  { id: 1, icon: "https://placecorgi.com/30" },
  { id: 2, icon: "https://placecorgi.com/30" },
  { id: 3, icon: "https://placecorgi.com/30" },
  { id: 4, icon: "https://placecorgi.com/30" },
  { id: 5, icon: "https://placecorgi.com/30" },
  { id: 6, icon: "https://placecorgi.com/30" },
];

const ProjectCard = ({ info: { image, body, name, techStack, html } }) => (
  <div className="p-8 bg-gray-500 rounded">
    <div
      style={{
        backgroundImage: `url(${image})`,
        height: "200px",
      }}
      className="bg-transparent bg-no-repeat bg-top transition-all delay-200 duration-1000 hover:bg-bottom"
    />
    <h3 className="text-2xl">{name}</h3>
    {/* quick and awful stuff i'll fix later i promise */}
    <div className="flex">
      {/* {techStack.map((x) => {
        const { id, icon } = LIBS.find((y) => y.id === x);
        return (
          <img
            alt={id}
            src={icon}
            className="rounded-full pr-2"
            width="30px"
            height="30px"
          />
        );
      })} */}
    </div>
    <div>{body}</div>
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
                body
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
            <ProjectCard key={node.id} info={node.frontmatter} />
          ))}
        </div>
      </div>
    )}
  />
);
export default Projects;
