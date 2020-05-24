import React from "react"
import PageNavigation from "../PageNavigation"


const SideBar = ({headings}) => {
  console.log(headings[0]);
  return (
    <div className="sidebar">
      <PageNavigation headings={headings}/>
    </div>
  )
}

export default SideBar