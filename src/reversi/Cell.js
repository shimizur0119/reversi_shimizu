import React from "react"

import Stone from "./Stone"
import { directionMap } from "./lib/lib"
import { getLineStrs, getChangeDatas } from "./index"

const Cell = props => {
  // console.log("render-cell")
  const displayMap = props.displayMap
  const data = props.data
  const myturn = props.myturn
  const size = props.size
  const borderSize = props.borderSize
  const style_cell = {
    backgroundColor: data.next ? "red" : "green",
    borderStyle: "solid",
    borderWidth: borderSize,
    borderColor: "black",
    display: "inline-block",
    width: size,
    height: size,
    verticalAlign: "bottom",
    fontSize: 0
  }

  const changeMapFunc = (displayMap, data, stone) => {
    const index = displayMap.findIndex(e => e.x === data.x && e.y === data.y)
    let returnMap = JSON.parse(JSON.stringify(displayMap))
    returnMap[index].stone = stone
    return returnMap
  }

  const clickFunc = () => {
    console.log("click")
    if (!data.next) return
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
    let arr = [...props.displayMap]
    for (const cd of changeDatas) {
      arr = changeMapFunc(arr, cd, val)
    }
    props.setDisplayMap(arr)
    props.setMyturn(!myturn)
  }

  return (
    <>
      <div style={style_cell} onClick={clickFunc}>
        <Stone size={size} stone={props.data.stone} />
      </div>
    </>
  )
}

export default Cell