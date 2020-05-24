import React from "react"
import { Link } from "gatsby"
import "./style.scss"

const Notice = () => (
  <div className="notice">
    <a href="" className="notice__link">
      <span className="notice__title">
        Скидка 20% на предзаказ
        <span className="notice__date">с 30 марта 2020 по 1 мая 2020</span>
      </span>
      <span
        className="notice__description">На услуги деревообработки и строганную продукцию из хвои и лиственницы</span>
    </a>
    <button className="notice__close" type="button" data-action="hide-banner" data-type="panel"
            title="Закрыть сообщение на час">Закрыть
    </button>
  </div>
)

export default Notice