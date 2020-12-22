module.exports = {
  siteMetadata: {
    title: `Your Site Name`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    'gatsby-transformer-remark'
  ],
};
