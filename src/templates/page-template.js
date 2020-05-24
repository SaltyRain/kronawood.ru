import React from 'react'
import Layout from "../components/Layout"



export default ({pageContext}) => {

  return (
    <Layout>
      <div className="container">
        <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }}/>
        <div dangerouslySetInnerHTML={{ __html: pageContext.content }}/>
        <p>Шаблон обычной страницы</p>
      </div>
    </Layout>
  )
}
