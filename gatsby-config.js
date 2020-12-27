module.exports = {
  siteMetadata: {
    title: `Your Site Name`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-transformer-remark-frontmatter",
      options: {
        whitelist: ["body"],
      },
    },
  ],
};
