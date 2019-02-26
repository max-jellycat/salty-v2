const path = require("path")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`src/templates/postTemplate.jsx`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      // fmImagesToRelative(node)
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {},
      })
    })
  })
}
