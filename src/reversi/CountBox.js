import React from "react"
import { css } from "glamor"


const CountBox = props => {
  const side = props.side
  const count = props.count
  const borderSize = props.borderSize * 2

  const box = css({
    backgroundColor: side === "P" ? "rgb(32,178,170,0.8)" : "rgb(255,165,0,0.8)",
    fontSize: "5vh",
    padding: "5%",
    margin: "5%",
    width: "20%",
    display: "inline-block",
    borderRadius: 10,
    color: "white",
    position: "relative",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: borderSize,
    verticalAlign: "bottom",
  })

  const name = css({
    position: "absolute",
    top: "-30%",
    left: "-15%",
    padding: "5%",
    borderRadius: 10,
    backgroundColor: "black",
    fontSize: "3vh",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: borderSize
  })
  const userTxt = side === "P" ? "YOU" : "COVID-19"


  return (
    <div {...box}>
      <div {...name}>{userTxt}</div>
      <span>{count}</span>
    </div>
  )
}

export default CountBox