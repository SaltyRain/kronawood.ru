import React from 'react';
import {graphql, useStaticQuery, Link} from "gatsby";
import styled from 'styled-components';

// const MainMenuWrapper = styled.div`
//   position: absolute;
//   top: 23px;
//   right: -50vw;
//   padding-left: 0;
//   overflow-x: hidden;
//   width: 50vw;
//   z-index: 1;
//   text-align: center;
//   background-color: #FFB900;
//   border-bottom-left-radius: 10px;
//   border-bottom-right-radius: 10px;
// `

const MainMenu = () => {
  const { allWordpressWpApiMenusMenusItems } = useStaticQuery(
    graphql`
    {
      allWordpressWpApiMenusMenusItems(filter: {
        name: {
          eq: "Main Menu"
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
    <div>
      {allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
        <Link to={item.object_slug} key={item.title}>
          {item.title}
        </Link>

      ))}
    </div>
  );
}
export default MainMenu;