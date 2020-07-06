import React from 'react';
import Img from "gatsby-image"


const ItemTemplate = (props) => {
  const { pageContext} = props
  const { product: { frontmatter } } = pageContext;
console.log(frontmatter.image.childImageSharp.fluid)
  return (
    <div className="blog-post-container">
      <div className="blog-post">
      <div className="post-thumbnail" style={{backgroundImage: `url(${frontmatter.image})`}}></div>
      <Img fluid={frontmatter.image.childImageSharp.fluid} />
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.price}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: frontmatter.description }}
        />
      </div>
    </div>
  );
}

// export const pageQuery = graphql`
//   query BlogPostByPath($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         path
//         title
//       }
//     }
//   }
// `;

export default ItemTemplate;