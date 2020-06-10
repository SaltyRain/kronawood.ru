import React from "react"

import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

import "./404.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Успешная отправка формы" />
    <div className="container page-404">
      <span className="error-text">Форма успешно отправлена!</span>
      <p>Наш специалист связатся с вами в ближайшее время</p>
      <Link to="/"><u>Вернуться на главную</u></Link>
    </div>
  </Layout>
)

export default NotFoundPage
