import React from "react"
import "./Hamburger.scss"

const Hamburger = () => {

  function openMenu() {
    let isActive = document.querySelector('.site-navigation--open');
    if (isActive === null) {
      document.getElementById('site-navigation').classList.add('site-navigation--open');
    }
    else {
      document.getElementById('site-navigation').classList.remove('site-navigation--open');
    }


  }
  return (
    <button className="action-buttons__item hamburger hamburger--squeeze" id="hamburger" type="menu" onClick={openMenu}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
    </button>
  )
}

export default Hamburger