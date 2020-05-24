import React from "react"

const Counter = () => {
  return (
    <div className="counter">
      <button className="counter__button counter__button--minus" type="button">--</button>
      <input className="counter__input" type="number" autoComplete="off"></input>
      <button className="counter__button counter__button--plus" type="button">+</button>
    </div>
  )
}

export default Counter