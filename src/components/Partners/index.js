import React from "react"
import PartnersStyles from './partners.module.css'
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"

const Partners = () => {
  const data = useStaticQuery(graphql`
  query {
    azb: file(relativePath: { eq: "azb.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
    cds: file(relativePath: { eq: "cds.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
    lsr: file(relativePath: { eq: "lsr.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
    sev: file(relativePath: { eq: "sev.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  return (
    <section className={PartnersStyles.container}>
      <h2 className={PartnersStyles.title}>Наши партнёры</h2>
      <ul className={PartnersStyles.list}>
        <div className={PartnersStyles.row}>
          <li className={PartnersStyles.item}><Img fluid={data.azb.childImageSharp.fluid} className={PartnersStyles.logo} alt="Партнер компании Крона"/></li>
          <li className={PartnersStyles.item}><Img fluid={data.cds.childImageSharp.fluid} className={PartnersStyles.logo} alt="Партнер компании Крона"/></li>
        </div>
        <div className={PartnersStyles.row}>
          <li className={PartnersStyles.item}><Img fluid={data.lsr.childImageSharp.fluid} className={PartnersStyles.logo} alt="Партнер компании Крона"/></li>
          <li className={PartnersStyles.item}><Img fluid={data.sev.childImageSharp.fluid} className={PartnersStyles.logo} alt="Партнер компании Крона"/></li>
        </div>
      </ul>
    </section>
  )
}

export default Partners