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
          <li className={PartnersStyles.item}><a href="https://www.azbuka-stroy.ru/"><Img fluid={data.azb.childImageSharp.fluid} className={PartnersStyles.logo} alt="Партнер компании Крона"/></a></li>
          <li className={PartnersStyles.item}><a href="https://www.cds.spb.ru/"><Img fluid={data.cds.childImageSharp.fluid} className={PartnersStyles.logo} alt="Партнер компании Крона"/></a></li>
        </div>
        <div className={PartnersStyles.row}>
          <li className={PartnersStyles.item}><a href="https://www.lsr.ru/spb/"><Img fluid={data.lsr.childImageSharp.fluid} className={PartnersStyles.logo} alt="Партнер компании Крона"/></a></li>
          <li className={PartnersStyles.item}><a href="http://www.sevcableport.ru/"><Img fluid={data.sev.childImageSharp.fluid} className={PartnersStyles.logo} alt="Партнер компании Крона"/></a></li>
        </div>
      </ul>
    </section>
  )
}

export default Partners