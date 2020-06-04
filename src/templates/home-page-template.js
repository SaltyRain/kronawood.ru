import React from 'react'
import { graphql } from "gatsby"

import Layout from "../components/Layout"

import Notice from "../components/Notice"
import Partners from "../components/Partners"
import ArticleList from "../components/ArticleList"
import LastArticles from "../components/LastArticles"
export default ({pageContext, data}) => (
  <Layout>
    <div className="container">
      <h1 dangerouslySetInnerHTML={{__html: pageContext.title}}/>
      <div dangerouslySetInnerHTML={{__html: pageContext.content}}/>

      <div>Это шаблон главной страницы</div>
    </div>


    <Notice

    />
    <div className="container">
      <Partners/>
      <ArticleList articles = {data.allWordpressPost.edges}/>
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
        }
      }
    }
}
`
