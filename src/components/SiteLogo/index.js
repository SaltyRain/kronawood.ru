import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const SiteLogo = (props) => {
  const { allWordpressWpLogo } = useStaticQuery(
    graphql`
    query {
      allWordpressWpLogo {
        edges {
          node {
            url {
              source_url
            }
          }
        }
      }
    }
    `)

    return (
        <img src={allWordpressWpLogo.edges[0].node.url.source_url} alt={props.alt} width={props.width} class={props.class}/>
    )
}

export default SiteLogo