import React from 'react';
import {graphql, useStaticQuery, Link} from "gatsby";

import "./style.scss"

const SiteNavigation = (props) => {
  const classes = "site-navigation " + props.class;
  const { allWordpressWpApiMenusMenusItems } = useStaticQuery(
    graphql`
    {
      allWordpressWpApiMenusMenusItems(filter: {
        name: {
          eq: "Site Navigation"
        }
      }) {
        edges {
          node {
            name
            items {
              title
              object_slug
            }
          }
        }
      }
    }
    `
  )
  return (
    <ul className={classes} id="site-navigation">
      {allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
        <li key={item.title} className="site-navigation__item" >
          <Link to={item.object_slug}  className="site-navigation__link" activeStyle={{ color: "white" }}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default SiteNavigation;