import React from "react"
import { css } from "glamor"

const MyButton = props => {
  const setFunc = props.func
  const val = props.val
  const borderSize = props.borderSize * 2
  const style = css({
    display: "inline-block",
    backgroundColor: "rgb(255,215,0)",
    padding: "5%",
    margin: "5%",
    fontSize: "5vh",
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: borderSize
  })

  const clickFunc = () => {
    console.log("button click!")
    setFunc(val + 1)
  }

  return (
    <div {...style} onClick={clickFunc}>RESTART</div>
  )
}

export default MyButton