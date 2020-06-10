import React from 'react'
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

import SiteIntro from "../components/SiteIntro"
import Notice from "../components/Notice"
import Partners from "../components/Partners"
import LastArticles from "../components/LastArticles"
export default ({data}) => (
  <Layout>

   <SiteIntro/>
    <Notice

    />
    <div className="container">
      <Partners/>
      <LastArticles articles = {data.allWordpressPost.edges}/>
    </div>

  </Layout>
)

export const query = graphql`
  query homePageData {
    allWordpressPost {
      edges {
        node {
          id
          slug
          title
          excerpt
          content
          featured_media {
            alt_text
            source_url
          }
        }
      }
    }
}
`
