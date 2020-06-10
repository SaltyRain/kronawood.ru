import React from "react"
import { Link } from "gatsby"
import "./style.scss"

const SiteIntro = () => {
  return (
    <section className="site-intro">
      <div className="container site-intro__container">
        {/*<h1 dangerouslySetInnerHTML={{__html: pageContext.title}}/>*/}
        {/*<div dangerouslySetInnerHTML={{__html: pageContext.content}}/>*/}

        <div className="site-intro__text-wrapper">
          <h2 className="site-intro__title">Производство пиломатериалов</h2>
          <p className="site-intro__text">
            Производственная база пиломатериалов в Санкт-Петербурге. Работаем как с частными лицами, так и с компаниями.
          </p>
          {/*<Link to="/" className="site-intro__button button">Перейти в каталог</Link>*/}
        </div>


      </div>
    </section>
  )
}

export default SiteIntro