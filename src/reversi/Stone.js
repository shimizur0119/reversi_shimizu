import React from "react"

import pic1 from "../svg/1.svg"
import pic2 from "../svg/2.svg"
// import pic1 from "../svg/1.svg"
// import pic2 from "../svg/ninja.svg"

const Stone = props => {
  // console.log("render-stone")
  const size = props.size
  const pic = props.stone === 0 ? pic1 : pic2
  if (props.stone === -1) return null
  // console.log("change!!!!!")
  return (
    <img style={{ display: "inline-block" }} src={pic} alt="stone" width={size} height={size} />
  )
}

export default Stone