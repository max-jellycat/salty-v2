import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <SEO title={frontmatter.title} image={frontmatter.image} article />
      <div className="post-container">
        <div className="post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <img src={frontmatter.thumbnail} alt="" />
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
