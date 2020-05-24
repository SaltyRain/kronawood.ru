import React from 'react'
import Layout from "../components/Layout"

export default ({pageContext}) => (
  <Layout>
    <article>
      <h1>
        {pageContext.title}
      </h1>
      <div dangerouslySetInnerHTML={{__html: pageContext.content}}/>
    </article>
  </Layout>

)