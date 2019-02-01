import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const POST_ARCHIVE_QUERY = graphql`
  query BlogpostArchive {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          {allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.path}>
              <Link to={`/posts/${edge.node.frontmatter.path}`}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </aside>
      </>
    )}
  />
)

export default Archive
