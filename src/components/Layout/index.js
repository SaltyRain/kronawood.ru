import React from "react"
import { graphql, StaticQuery} from "gatsby"
import Header from "../Header"
import { Helmet } from "react-helmet"


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

    <Header/>
    <main>
      {children}
    </main>

  </>
);

export default Layout
