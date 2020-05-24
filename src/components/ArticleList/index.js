import React from "react"
import Article from "../Article"
import "./style.scss"

const ArticleList = ({articles}) => {
  console.log(typeof articles);
  console.log(articles);
  const articleElements = articles.map(article => <li key={article.node.id}> <Article article = {article}/></li>)
  return (
    <section className="article-list">
      <h2 className="visually-hidden">Cтатьи</h2>
        <ul>
          {articleElements}
        </ul>
    </section>
  )
}

export default ArticleList