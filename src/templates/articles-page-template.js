import React from 'react'
import Layout from "../components/Layout"
import ArticleList from "../components/ArticleList"
import { graphql } from "gatsby"
import "./pages.scss"

const ArticlesPageTemplate = ({pageContext, data}) => {
  return (
  <Layout>

    <div className="container">
      <h1 className="visually-hidden" dangerouslySetInnerHTML={{ __html: pageContext.title }}/>
      <div className="articles-intro" dangerouslySetInnerHTML={{ __html: pageContext.content }}/>
      <ArticleList articles={data.allWordpressPost.edges}/>
    </div>
  </Layout>
  )
}

export default ArticlesPageTemplate

export const query = graphql`
  query ArticlesData {
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