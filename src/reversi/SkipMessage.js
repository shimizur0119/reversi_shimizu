import React from "react"
import { css } from "glamor"

const SkipMessage = props => {
  const inFlag = props.inFlag

  const anime = css.keyframes({
    '0%': { transform: 'scale(0.1)', opacity: 0, visibility: "visible" },
    '20%': { transform: 'scale(1.2)', opacity: 1, visibility: "visible" },
    '40%': { transform: 'scale(1)', opacity: 1, visibility: "visible" },
    '90%': { transform: 'scale(1)', opacity: 1, visibility: "visible" },
    '100%': { transform: 'scale(0.1)', opacity: 0, visibility: "visible" },
  })

  const animation = inFlag ? css({
    animation: `${anime} 2s`
  }) : null


  const tmp_style = css({
    // ".hi &": { animation: `${anime} 2s` },
    // animation: `${anime} 2s`,
    height: "20%",
    width: "60%",
    backgroundColor: "rgb(128,128,128,0.9)",
    position: "absolute",
    zIndex: 10,
    top: "40%",
    left: "20%",
    textAlign: "center",
    borderRadius: "5% / 15%",
    visibility: "hidden"
  })
  const txt_style = css({
    fontSize: "10vh",
    opacity: 1,
    display: "block",
  })

  return (
    <div {...tmp_style} {...animation}>
      <span {...txt_style}>SKIP</span>
    </div>
  )
}

export default SkipMessage