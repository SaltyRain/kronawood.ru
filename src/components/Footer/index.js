import React from "react"
import { Link } from "gatsby"
import "./style.scss"

const Footer = () => {
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
            <li className="footer__section-item"><Link to='/'>Доска / Брус</Link></li>
            <li className="footer__section-item"><Link to='/'>Вагонка Блок-хаус Планкен</Link></li>
            <li className="footer__section-item"><Link to='/'>Термодревесина</Link></li>
            <li className="footer__section-item"><Link to='/'>Террасная доска / Доска пола</Link></li>
            <li className="footer__section-item"><Link to='/'>Погонаж</Link></li>
            <li className="footer__section-item"><Link to='/'>Готовые изделия</Link></li>
          </ul>
        </section>

        <section className="footer__section">
          <h4 className="footer__section-title">Пиломатериалы</h4>
          <ul className="footer__section-items">
            <li className="footer__section-item"><Link to='/'>Нестроганые</Link></li>
            <li className="footer__section-item"><Link to='/'>Строганые</Link></li>
            <li className="footer__section-item"><Link to='/'>Конструкционные</Link></li>
            <li className="footer__section-item"><Link to='/'>Отделочные</Link></li>
            <li className="footer__section-item"><Link to='/'>Хвоя</Link></li>
            <li className="footer__section-item"><Link to='/'>Лиственница</Link></li>
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
              <li className="footer__section-item footer__section-item--row"><Link to='/'>Вконтакте</Link></li>
              <li className="footer__section-item footer__section-item--row"><Link to='/'>Инстаграм</Link></li>
              <li className="footer__section-item footer__section-item--row"><Link to='/'>Фейсбук</Link></li>
            </ul>
          </section>
        </section>
      </div>

    </footer>
  )
}

export default Footer