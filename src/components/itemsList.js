/**
 * ItemsList component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import useItemsQuery from "../hooks/useItemsQuery"

const ItemsList = () => {
  const items = useItemsQuery()

  return (
    <div id="ItemsList">
      {items.map(({ node: { frontmatter: { title, path } } }) => (
        <div key={title}>
          <Link to={path}>{title}</Link>
        </div>
      ))}
    </div>
  )
}

export default ItemsList
