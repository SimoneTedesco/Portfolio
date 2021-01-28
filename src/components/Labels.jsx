import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Label = ({ color, icon, name }) => (
  <div
  // whileHover={{ scale: 1.1 }}
  // style={{ backgroundColor: color }}
  // className="flex rounded-full h-12 mb-4 mr-4 py-2 px-4 flex-label md:flex-initial md:flex-grow"
  >
    <img
      src={icon}
      alt={name}
      className="rounded-full m-auto"
      width="40px"
      height="40px"
    />
    <span className="my-auto">{name}</span>
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
      // <section className="flex flex-wrap my-64">
      <section className="w-full p-32 bg-green-300">
        <h2 className="text-4xl mb-4">Skills &amp; Tools</h2>
        <div className="flex justify-between">
          {data.allMarkdownRemark.edges.map(({ node }) => {
            const { color, icon, name } = node.frontmatter;
            return (
              <Label key={node.id} color={color} icon={icon} name={name} />
            );
          })}
        </div>
        <h2 className="text-4xl mb-4">Other tools</h2>
        <div className="flex justify-between">
          {data.allMarkdownRemark.edges.map(({ node }) => {
            const { color, icon, name } = node.frontmatter;
            return (
              <Label key={node.id} color={color} icon={icon} name={name} />
            );
          })}
        </div>
        <h2 className="text-4xl mb-4">Stuff I&apos;d like to learn</h2>
        {/* node.js, react native, svelte */}
        <div className="flex justify-between">
          {data.allMarkdownRemark.edges.map(({ node }) => {
            const { color, icon, name } = node.frontmatter;
            return (
              <Label key={node.id} color={color} icon={icon} name={name} />
            );
          })}
        </div>
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
