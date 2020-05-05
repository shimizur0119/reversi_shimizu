import React from "react"
import { css } from "glamor"


import Stone from "./Stone"
import { directionMap } from "./lib/lib"
import { getLineStrs, getChangeDatas } from "./index"

export const changeMapFunc = (displayMap, data, stone) => {
  const index = displayMap.findIndex(e => e.x === data.x && e.y === data.y)
  let returnMap = JSON.parse(JSON.stringify(displayMap))
  returnMap[index].stone = stone
  return returnMap
}

export const reversFunc = (myturn, directionMap, displayMap, data) => {
  const val = myturn ? 0 : 1
  let changeDatas = []
  for (const dir of directionMap) {
    const strs = getLineStrs(dir, data, displayMap)
    const datas = getChangeDatas(dir, data, displayMap)
    let flag = myturn ? strs.match(/^BE+P/) : strs.match(/^BP+E/)
    if (flag) {
      const index = datas.findIndex(e => e.stone === val)
      changeDatas = changeDatas.concat(datas.slice(0, index))
    }
  }
  let arr = JSON.parse(JSON.stringify(displayMap))
  for (const cd of changeDatas) {
    arr = changeMapFunc(arr, cd, val)
  }
  return arr
}

const Cell = props => {
  const displayMap = props.displayMap
  const data = props.data
  const myturn = props.myturn
  const size = props.size
  const borderSize = props.borderSize
  const style_cell = css({
    backgroundColor: data.next ? "red" : "green",
    borderStyle: "solid",
    borderWidth: borderSize,
    borderColor: "black",
    display: "inline-block",
    width: size,
    height: size,
    verticalAlign: "bottom",
    fontSize: 0
  })


  const clickFunc = () => {
    if (!data.next) return
    const arr = reversFunc(myturn, directionMap, displayMap, data)
    props.setDisplayMap(arr)
    props.setSkipFlag(0)
    props.setMyturn(!myturn)
  }

  return (
    <>
      <div {...style_cell} onClick={clickFunc}>
        <Stone size={size} stone={props.data.stone} />
      </div>
    </>
  )
}

export default Cell