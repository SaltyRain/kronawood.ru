import React from 'react'
import Layout from "../components/Layout"
import SideBar from "../components/SideBar"


const LeftSidebarTemplate = ({pageContext}) => {
  let regexp = /<h[2-4]>([\s\S]*?)<\/h[2-4]>/g;
  let headings = pageContext.content.match(regexp);
  headings = Array.from(headings);
  console.log(headings);
  return (
    <Layout>
      <h1 className="visually-hidden" dangerouslySetInnerHTML={{ __html: pageContext.title }}/>
      <div className="container container--flex">

        <SideBar headings = {headings}/>
        <div className="left-sidebar-content" dangerouslySetInnerHTML={{ __html: pageContext.content }}/>

      </div>

      {/*{console.log(headings)}*/}
    </Layout>
  )
}

export default LeftSidebarTemplate