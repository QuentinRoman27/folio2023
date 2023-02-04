import React from "react"

export default function Technology(props) {
  let iconsTech = props.iconsTech.map(icon => (
    <div className="icon" key={icon.toString()}>
      <img src={"../images/icons/" + icon} alt={icon.split(".")[0]} />
      {icon.split(".")[0][0].toUpperCase() + icon.split(".")[0].slice(1)}
    </div>
  ))

  return (
    <div className="icons flex w-full flex-wrap my-8">{iconsTech}</div>
  )
}
