import React from "react"

import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

import "./404.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container page-404">
      <span className="error-text">404</span>
      <h1>Страница не найдена</h1>
      <p>Похоже, такой страницы не существует...</p>
      <Link to="/"><u>Вернуться на главную</u></Link>
    </div>
  </Layout>
)

export default NotFoundPage
