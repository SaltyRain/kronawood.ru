import React from "react"
import { Link } from "gatsby"
import "style.scss"

import Counter from "../Counter"
import Button from "../Button"

const Product = () => {
  return (
    <div className="product">
      <Link to="/">
        <img src="" alt="" className="product__image"/>
        <h4 className="product__title"></h4>
      </Link>

      <div className="product__row-container">
        <span className="product__price"></span>
        <Counter/>
      </div>

      <Button text = "Добавить в корзину"/>
    </div>
  )
}

export default Product