import React from "react"
import Article from "../Article"
import "./style.scss"

const ArticleList = ({articles}) => {
  const articleElements = articles.map(article => <li className="article-list__item" key={article.node.id}> <Article article = {article}/></li>)
  return (
    <ul className="article-list">
      {articleElements}
    </ul>
  )
}

export default ArticleList