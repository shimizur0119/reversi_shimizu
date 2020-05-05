import React from "react"
import { css } from "glamor"

const EndMessage = props => {
  console.log("render EndMessage")
  const count = props.count

  const anime = css.keyframes({
    '0%': { transform: 'scale(0.1)', opacity: 0, visibility: "visible" },
    '20%': { transform: 'scale(1.2)', opacity: 1, visibility: "visible" },
    '40%': { transform: 'scale(1)', opacity: 1, visibility: "visible" },
    '100%': { transform: 'scale(1)', opacity: 1, visibility: "visible" },
  })

  const tmp_style = css({
    animation: `${anime} 2s`,
    height: "20%",
    width: "60%",
    backgroundColor: "rgb(128,128,128,0.9)",
    position: "absolute",
    zIndex: 10,
    top: "40%",
    left: "20%",
    textAlign: "center",
    borderRadius: "5% / 15%",
  })
  const txt_style = css({
    fontSize: "10vh",
    opacity: 1,
    display: "block",
  })

  let txt
  if (count.P === count.E) {
    txt = "DRAW"
  } else if (count.P > count.E) {
    txt = "WIN"
  } else if (count.P < count.E) {
    txt = "LOSE"
  }

  return (
    <div {...tmp_style}>
      <span {...txt_style}>{txt}</span>
    </div>
  )
}

export default EndMessage