import React from "react"

import Callback from "./Callback"
import Telephone from "./Telephone"
import Hamburger from "./Hamburger"

import "./style.scss"

const ActionButtons = () => {
  return (
    <div className="action-buttons">
      <Callback/>
      <Telephone/>
      <Hamburger/>
    </div>
  )
}

export default ActionButtons