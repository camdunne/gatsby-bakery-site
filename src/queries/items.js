import { graphql } from "gatsby"

export const GET_ALL_ITEMS = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___title] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            price
            description
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  src
                  srcSet
                  aspectRatio
                  sizes
                  base64
                }
              }
            }
          }
        }
      }
    }
  }
`
