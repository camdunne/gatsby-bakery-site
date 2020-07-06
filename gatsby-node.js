/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const {fmImagesToRelative} = require('gatsby-remark-relative-images')
const { createFilePath} = require('gatsby-source-filesystem')
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
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
                  fluid(maxWidth: 600) {
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
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const itemTemplate = path.resolve('src/templates/itemTemplate.js');
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const path = node.frontmatter.path
    console.log('createPage')
    createPage({
      path,
      component: itemTemplate,
      context: {
        pagePath: path,
        product: node,
      },
    });
  });
};

exports.onCreateNode = ({ node}) => {
  fmImagesToRelative(node);
};