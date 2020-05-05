import React from "react"
import { css } from "glamor"

import pic1 from "../svg/1.svg"
import pic2 from "../svg/2.svg"
// import pic1 from "../svg/1.svg"
// import pic2 from "../svg/ninja.svg"

const Stone = props => {
  const size = props.size
  const pic = props.stone === 0 ? pic1 : pic2
  const stoneStyle = css({ display: "inline-block" })
  if (props.stone === -1) return null
  return (
    <img {...stoneStyle} src={pic} alt="stone" width={size} height={size} />
  )
}

export default Stone