/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `website-gatsby-vfinal`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bestisblessed`,
        short_name: `bestisblessed`,
        start_url: `/`,
        background_color: `#0a192f`,
        theme_color: `#64ffda`,
        display: `minimal-ui`,
        icon: `src/images/pfp.png`,
      },
    },
  ],
}
