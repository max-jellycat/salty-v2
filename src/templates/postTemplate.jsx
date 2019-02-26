import React from "react"
import PropTypes from "prop-types"
import { kebabCase } from "lodash"
import { graphql, Link } from "gatsby"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import Content, { HTMLContent } from "../components/Content"

export const PostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  thumbnail,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="tag-list">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <Image fluid={thumbnail.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </section>
  )
}

PostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  thumbnail: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const Post = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.thumbnail}
        article
      />
      <PostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.title}
        thumbnail={post.frontmatter.thumbnail}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Post

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
