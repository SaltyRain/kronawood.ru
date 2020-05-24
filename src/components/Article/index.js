import React from "react"
import {graphql, StaticQuery} from "gatsby"
import { Link } from "gatsby"
import "./style.scss"


const Article = (props) => {
  const {article} = props
  return (
    <article className="preview-article">
      <Link to={`/post/${article.node.slug}`}>
        <div className="preview-article__image-container">
          <img src="" alt={`Изображение к статье ${article.node.title}`}/>
          <div className="preview-article__text-container">
            <h2 className="preview-article__title">
              {article.node.title}
            </h2>
            <div
              className="preview-article__description"
              dangerouslySetInnerHTML={{__html: article.node.excerpt}}
            />
          </div>
        </div>
      </Link>
    </article>
  )
}

export default Article
