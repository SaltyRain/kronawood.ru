import React from "react"
import { graphql, StaticQuery} from "gatsby"
import Header from "../Header"
import Footer from "../Footer"
import { Helmet } from "react-helmet"

import SEO from "../seo"

const Layout = ({ children }) => (
  <>
    <StaticQuery query={graphql`
     {
      allWordpressWpFavicon {
        edges {
          node {
            url {
              source_url
            }
          }
        }
      }
    }
    `}
    render = {props => <Helmet><link rel="icon" href={props.allWordpressWpFavicon.edges[0].node.url.source_url}/> </Helmet>}/>

    <SEO
      title="ТПП Крона"
    />
    <Header/>
    <main>
      {children}
    </main>
      <Footer/>

  </>
);

export default Layout
