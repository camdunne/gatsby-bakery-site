import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ItemsList from "../components/itemsList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>This Weeks Goodies</p>
    <ItemsList />
  </Layout>
)

export default IndexPage
