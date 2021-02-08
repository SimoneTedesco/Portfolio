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
      className="w-16 m-auto mb-1"
      width="64px"
      height="64px"
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
                wishlist
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const skills = [];
      const wishlists = [];
      data.allMarkdownRemark.edges.forEach(({ node }) => {
        const arr = node.frontmatter.wishlist ? wishlists : skills;
        arr.push(node);
      });

      return (
        // <section className="flex flex-wrap my-64">
        <section className="w-full p-32 text-center">
          <h2 className="text-4xl mb-4">Skills</h2>
          <div className="flex justify-center items-end gap-5">
            {skills.map((skill) => {
              const { color, icon, name } = skill.frontmatter;
              return (
                <Label key={skill.id} color={color} icon={icon} name={name} />
              );
            })}
          </div>
          <h2 className="text-4xl my-4">My objectives</h2>
          {/* node.js, react native, svelte */}
          <div className="flex justify-center items-end gap-5">
            {wishlists.map((wishlist) => {
              const { color, icon, name } = wishlist.frontmatter;
              return (
                <Label
                  key={wishlist.id}
                  color={color}
                  icon={icon}
                  name={name}
                />
              );
            })}
          </div>
        </section>
      );
    }}
  />
);

export default Labels;

Label.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
