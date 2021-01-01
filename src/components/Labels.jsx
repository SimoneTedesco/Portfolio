import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";

const Label = ({ color, icon, name }) => (
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
      query getAllLabels {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/labels/" } }) {
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
      <section className="flex flex-wrap my-16">
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const { color, icon, name } = node.frontmatter;
          return <Label key={node.id} color={color} icon={icon} name={name} />;
        })}
      </section>
    )}
  />
);

export default Labels;

Label.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
