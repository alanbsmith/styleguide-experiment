
module.exports = {
  siteMetadata: {
    title: 'styleguide experiment',
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-mdx',
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
