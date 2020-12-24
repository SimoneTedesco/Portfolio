import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Label = ({ info: { color, icon, name } }) => (
  <div
    style={{ backgroundColor: color }}
    className="flex rounded-full mb-4 mr-4 py-2 px-4 flex-grow"
  >
    <div>
      <img
        src={icon}
        alt={name}
        className="rounded-full"
        width="40px"
        height="40px"
      />
    </div>
    <span className="ml-2 my-auto">{name}</span>
  </div>
);

const Labels = () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                name
                icon
                color
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="flex flex-wrap">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Label key={node.id} info={node.frontmatter} />
        ))}
      </div>
    )}
  />
);

export default Labels;
