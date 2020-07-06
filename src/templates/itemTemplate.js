import React from 'react';
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown";

const ItemTemplate = (props) => {
  const { pageContext} = props
  const { product: { frontmatter } } = pageContext;

  return (
    <div>
      <div>
      <Img fluid={frontmatter.image.childImageSharp.fluid} />
        <h1>{frontmatter.title}</h1>
        <h2>${frontmatter.price}</h2>
        <ReactMarkdown source={frontmatter.description}/>
      </div>
    </div>
  );
}

export default ItemTemplate;