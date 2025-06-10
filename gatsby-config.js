/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `MY WEBSITE`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MY WEBSITE`,
        short_name: `MY WEBSITE`,
        start_url: `/`,
        background_color: `#0a192f`,
        theme_color: `#64ffda`,
        display: `minimal-ui`,
        icon: `src/images/pfp.png`,
      },
    },
  ],
}
