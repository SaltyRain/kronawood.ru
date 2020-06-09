import React from "react"
import Article from "../Article"
import "./style.scss"

const LastArticles = ({articles}) => {
  return (
    <section className="last-articles">
      <h2 className="last-articles__title">Последние статьи</h2>
      <ul className="article-list">
        <li className="article-list__item"><Article article = {articles[0]}/></li>
        <li className="article-list__item"><Article article = {articles[1]}/></li>
        <li className="article-list__item"><Article article = {articles[2]}/></li>
      </ul>
    </section>
  )
}

export default LastArticles