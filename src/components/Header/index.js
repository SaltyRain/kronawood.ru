import React from "react"
import { Link } from "gatsby"
import {graphql, useStaticQuery, StaticQuery} from "gatsby"

import SiteNavigation from "../SiteNavigation"
import SiteLogo from "../SiteLogo"
import ActionButtons from "../ActionButtons"
import Search from "../Search"
import Basket from "../Basket"

import "./style.scss"

const Header = () => {
  return (
    <header className="main-header">
      <h1 className="visually-hidden">Продажа пиломатериалов в Санкт-Петербурге и Ленинградской области</h1>

      <div className="main-header__gray">
        <div className="main-header__gray-wrapper">
          <Link to="/">
            <div className="main-header__logo">
              <SiteLogo width="100px" alt="Перейти на главную страницу"/>
            </div>
          </Link>
          <ActionButtons/>
          <Search class="main-header__search"/>
        </div>
      </div>
      {/* main-header__gray */}

      <div className="main-header__orange">
        <div className="main-header__orange-wrapper">
          <SiteNavigation class="main-header__site-navigation"/>
          <Basket/>
        </div>
      </div>
    {/* main-header__orange */}

    </header>
  )
}

export default Header