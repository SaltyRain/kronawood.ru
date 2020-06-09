import React from "react"
import { Link } from "gatsby"
import "./style.scss"

const PageNavigation = ({headings}) => {
  const items = headings.map(item =>
    <li key={item} className="page-navigation__item">
      <Link to="/" dangerouslySetInnerHTML={{__html: item}}>

      </Link>
    </li>)
  return (
    <section className="page-navigation">
      <h3 className="visually-hidden">Навигация по странице</h3>
      <ul className="page-navigation__list">
        {items}
      </ul>
    </section>
  )
}

export default PageNavigation