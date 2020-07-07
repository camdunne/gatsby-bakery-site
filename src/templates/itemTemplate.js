import React from "react"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"

const ItemTemplate = props => {
  const { pageContext } = props
  const {
    product: { frontmatter },
  } = pageContext

  return (
    <div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Img fluid={frontmatter.image.childImageSharp.fluid} />
      </div>
      <h1>{frontmatter.title}</h1>
      <h2>${frontmatter.price}</h2>
      <ReactMarkdown source={frontmatter.description} />
    </div>
  )
}

export default ItemTemplate
