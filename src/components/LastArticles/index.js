import React from "react"
import Article from "../Article"
import "./style.scss"

const LastArticles = ({articles}) => {
  // const articleElements = articles.map(article => <li key={article.node.id}> <Article article = {article}/></li>)
  return (
    <section className="last-articles">
      <h2 className="last-articles__title">Последние статьи</h2>
      <ul>
        <li><Article article = {articles[0]}/></li>
        <li><Article article = {articles[1]}/></li>
        <li><Article article = {articles[2]}/></li>
      </ul>
    </section>
  )
}

export default LastArticles