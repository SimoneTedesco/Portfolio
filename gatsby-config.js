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
  ],
};
