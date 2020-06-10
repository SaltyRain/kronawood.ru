import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import "./style.scss"
import Img from "gatsby-image"


const Footer = () => {
  const images = useStaticQuery(graphql`
  query {
    vk: file(relativePath: { eq: "vk-color.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    instagram: file(relativePath: { eq: "instagram-color.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    facebook: file(relativePath: { eq: "facebook-color.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  return (
    <footer className="footer">
      <div className="container footer__container">
        <section className="footer__section">
          <h4 className="footer__section-title">Компания</h4>
          <ul className="footer__section-items">
            <li className="footer__section-item"><Link to='/about'>О компании</Link></li>
            <li className="footer__section-item"><Link to='/vacancies'>Вакансии</Link></li>
            <li className="footer__section-item"><a href="https://desiretree.ru">Столярная мастерская</a></li>
            <li className="footer__section-item"><a href="https://panwood.ru">Продукция Pan</a></li>
            <li className="footer__section-item"><Link to='/contacts'>Контакты</Link></li>
          </ul>
        </section>
        <section className="footer__section">
          <h4 className="footer__section-title">Каталог товаров</h4>
          <ul className="footer__section-items">
            <li className="footer__section-item">Доска / Брус</li>
            <li className="footer__section-item">Вагонка Блок-хаус Планкен</li>
            <li className="footer__section-item">Термодревесина</li>
            <li className="footer__section-item">Террасная доска / Доска пола</li>
            <li className="footer__section-item">Погонаж</li>
            <li className="footer__section-item">Готовые изделия</li>
          </ul>
        </section>

        <section className="footer__section">
          <h4 className="footer__section-title">Пиломатериалы</h4>
          <ul className="footer__section-items">
            <li className="footer__section-item">Нестроганые</li>
            <li className="footer__section-item">Строганые</li>
            <li className="footer__section-item">Конструкционные</li>
            <li className="footer__section-item">Отделочные</li>
            <li className="footer__section-item">Хвоя</li>
            <li className="footer__section-item">Лиственница</li>
          </ul>
        </section>
        <section className="footer__section">
          <section className="footer__subsection">
            <h4 className="footer__section-title">Контакты</h4>
            <ul className="footer__section-items">
              <li className="footer__section-item">Санкт-Петербург, ул. Менделеевская, 6</li>
              <li className="footer__section-item">Ленинградская область, Всеволожский район, посёлок Песочный, ул. Ленинградская, дом 93</li>
              <li className="footer__section-item">Ленинградская область, Новое Девяткино, Северная ТЭЦ, участок 14.</li>
              <li className="footer__section-item"><a href="tel:88123725015">8 (812) 372-50-15</a></li>
            </ul>
          </section>
          <section className="footer__subsection">
            <h4 className="footer__section-title">Присоединяйтесь</h4>
            <ul className="footer__section-items footer__section-items--row">
              <li className="footer__section-item footer__section-item--row"><a href="https://vk.com/kronawood"><Img className="social-media-icon" fluid={images.vk.childImageSharp.fluid} alt="Мы в вконтакте"/> </a></li>
              <li className="footer__section-item footer__section-item--row"><a href="https://www.instagram.com/kronawood_spb/"><Img className="social-media-icon" fluid={images.instagram.childImageSharp.fluid} alt="Мы в инстаграмме"/> </a></li>
              <li className="footer__section-item footer__section-item--row"><a href="https://www.facebook.com/kronawood.spb"><Img className="social-media-icon" fluid={images.facebook.childImageSharp.fluid} alt="Мы на фейсбуке"/> </a></li>
            </ul>
          </section>
        </section>
      </div>

    </footer>
  )
}

export default Footer