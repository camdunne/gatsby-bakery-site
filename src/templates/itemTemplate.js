import React from 'react';

const ItemTemplate = ({ pageContext }) => {
  const { product: { frontmatter, description } } = pageContext;
  console.log(pageContext)
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <img alt={frontmatter.title} src={frontmatter.image}/>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.price}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: description }}
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