module.exports = {
  siteMetadata: {
    title: "Salt & Paper",
    titleTemplate: "%s",
    description: "Succession of words written with salty ink.",
    url: "salt-and-paper.fr",
    image: "",
    twitterUsername: "@max-jellycat",
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/post`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
  ],
}
