import React from "react";
import { StaticQuery, graphql } from "gatsby";
import SocialLink from "./SocialLink";

export const list = [
  {
    name: "LinkedIn",
    image: "/images/angular_simple.svg",
    link: "https://brand.linkedin.com/downloads",
  },
  {
    name: "GitHub",
    image: "/images/css3.svg",
    link: "https://github.com/logos",
  },
  {
    name: "Instagram",
    image: "/images/less.svg",
    link: "https://en.instagram-brand.com/assets/icons",
  },
];

const AboutMe = () => (
  <StaticQuery
    query={graphql`
      query getAllSocials {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/socials/" } }
        ) {
          edges {
            node {
              id
              frontmatter {
                name
                image
                link
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <div
        className="flex justify-evenly mt-4 pt-12"
        style={{ margin: "0 25%" }}
      >
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const { image, name, link } = node.frontmatter;
          return (
            <SocialLink key={node.id} image={image} name={name} link={link} />
          );
        })}
      </div>
    )}
  />
);

export default AboutMe;
