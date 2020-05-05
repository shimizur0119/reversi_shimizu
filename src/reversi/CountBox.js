import React from "react"
import { css } from "glamor"


const CountBox = props => {
  const side = props.side
  const count = props.count

  const box = css({
    backgroundColor: side === "P" ? "rgb(128,128,128,0.8)" : "rgb(128,128,128,0.8)",
    fontSize: "5vh",
    padding: "5%",
    margin: "5%",
    width: "20%",
    display: "inline-block",
    borderRadius: 10
  })


  return (
    <div {...box}>
      <span>{count}</span>
    </div>
  )
}

export default CountBox