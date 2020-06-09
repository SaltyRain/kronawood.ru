import React from 'react'
import Layout from "../components/Layout"

export default ({pageContext}) => (
  <Layout>
    <div className="container">
      <article className="post">
        <h1 className="post__title">
          {pageContext.title}
        </h1>
        <div dangerouslySetInnerHTML={{__html: pageContext.content}}/>
      </article>
    </div>
  </Layout>
)