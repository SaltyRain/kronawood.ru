import React from "react"
import "./Hamburger.scss"

const Hamburger = () => {
  return (
    <button className="action-buttons__item hamburger hamburger--squeeze" id="hamburger" type="menu">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
    </button>
  )
}

export default Hamburger