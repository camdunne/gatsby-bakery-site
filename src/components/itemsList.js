/**
 * ItemsList component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, Link } from "gatsby"
import { GET_ALL_ITEMS } from "../queries/items"

const ItemsList = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(GET_ALL_ITEMS)

  return (
    <div id="ItemsList">
      {edges.map(({ node: { frontmatter: { title, path } } }) => (
        <div key={title}>
          <Link to={path}>{title}</Link>
        </div>
      ))}
    </div>
  )
}

export default ItemsList
