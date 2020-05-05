import React from "react"
import { css } from "glamor"




const Layout = props => {
  const size = props.size
  const borderSize = props.borderSize
  const style_box1 = css({
    backgroundColor: "black",
    borderStyle: "solid",
    borderWidth: borderSize,
    borderColor: "black",
    display: "inline-block",
    width: size,
    height: size,
    position: "relative",
  })

  return (
    <div {...style_box1}>
      {props.children}
    </div>
  )
}

export default Layout