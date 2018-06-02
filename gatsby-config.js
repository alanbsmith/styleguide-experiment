
module.exports = {
  siteMetadata: {
    title: 'styleguide experiment',
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    // 'gatsby-transformer-remark',
  ],
}
