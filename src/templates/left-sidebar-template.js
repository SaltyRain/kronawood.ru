import React from 'react'
import Layout from "../components/Layout"
import SideBar from "../components/SideBar"


const LeftSidebarTemplate = ({pageContext}) => {
  let regexp = /<h2>([\s\S]*?)<\/h2>/g;
  let headings = pageContext.content.match(regexp);


  // alert(typeof headings);
  headings = Array.from(headings);
  // alert(headings[0]);
  // alert(headings);
  console.log(headings);
  // alert(headings[0]);
  // alert(headings[0].input);
  // console.log(headings[0].input);
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