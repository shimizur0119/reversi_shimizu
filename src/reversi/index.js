import React, { useState, useEffect, useRef } from "react"
import { css } from "glamor"

import Layout from "./Layout"
import Cell, { reversFunc } from "./Cell"
import SkipMessage from "./SkipMessage"
import EndMessage from "./EndMessage"
import CountBox from "./CountBox"
import MyButton from "./MyButton"
import { directionMap, CN } from "./lib/lib"

const cellMapFunc = width => {
  const n = width ** 2
  let result = []
  for (let i = 0; i < n; i++) {
    const x = i % width
    const y = Math.floor(i / width)
    let data = { x, y, stone: -1, next: false }
    if ((x === 3 && y === 3) || (x === 4 && y === 4)) {
      data.stone = 0
      data.touch = true
    } else if ((x === 4 && y === 3) || (x === 3 && y === 4)) {
      data.stone = 1
      data.touch = true
    }
    result.push(data)
  }
  return result
}


export const getLineStrs = (dir, data, displayMap) => {
  let x = data.x
  let y = data.y
  let strs = ""
  while (true) {
    let n = x + (y * 8)
    let str
    if (displayMap[n].stone === -1) str = "B"
    if (displayMap[n].stone === 0) str = "P"
    if (displayMap[n].stone === 1) str = "E"
    strs += str
    x += dir.x
    y += dir.y
    if (x < 0 || x > 7 || y < 0 || y > 7) break
  }
  return strs
}

export const getChangeDatas = (dir, data, displayMap) => {
  let x = data.x
  let y = data.y
  let datas = []
  while (true) {
    let n = x + (y * 8)
    datas.push(displayMap[n])
    x += dir.x
    y += dir.y
    if (x < 0 || x > 7 || y < 0 || y > 7) break
  }
  return datas
}

const getAddNextMap = (displayMap, myturn) => {
  let tmpMap = JSON.parse(JSON.stringify(displayMap))
  let trues = []
  for (const data of tmpMap) {
    let flag = false
    for (const dir of directionMap) {
      const strs = getLineStrs(dir, data, displayMap)
      const next = myturn ? strs.match(/^BE+P/) : strs.match(/^BP+E/)
      if (next) {
        flag = true
        trues.push(flag)
      }
    }
    data.next = flag
  }
  return tmpMap
}


const getCount = displayMap => {
  const P = displayMap.filter(e => e.stone === 0).length
  const E = displayMap.filter(e => e.stone === 1).length
  const count = { P, E }
  return count
}

const Reversi = props => {
  console.log("render-Reversi")
  const initRef = useRef()
  const width = CN
  const borderSize = props.size / width / 100 * 5
  const size = props.size - (borderSize * 2)
  const cellSize = size / width - (borderSize * 2)
  const cellMap = cellMapFunc(width)
  const [displayMap, setDisplayMap] = useState(cellMap)
  const [myturn, setMyturn] = useState(true)
  const [skipFlag, setSkipFlag] = useState("")
  const [count, setCount] = useState({ P: 2, E: 2 })
  const [end, setEnd] = useState(false)
  const [restart, setRestart] = useState(0)

  useEffect(() => {
    console.log("initRef")
  }, [initRef])

  useEffect(() => {
    console.log("useEfect myturn")
    const nextMap = getAddNextMap(displayMap, myturn)
    setDisplayMap(nextMap)
    const count = getCount(nextMap)
    setCount(count)
    let flag = nextMap.findIndex(e => e.next === true) === -1
    let flagTxt = myturn ? "P" : "E"
    if (flag) setSkipFlag(skipFlag + flagTxt)

    if (!myturn && !flag) {
      let acts = nextMap.filter(e => e.next === true)
      let actData = acts[0]
      const newMap = reversFunc(myturn, directionMap, nextMap, actData)
      setDisplayMap(newMap)
      setMyturn(true)
    }
    // ↓lintを部分的に無効にするコメント
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myturn, restart])

  useEffect(() => {
    console.log("useEffect skip")
    if (skipFlag === "") return
    if ((count.P === 0 || count.E === 0) || count.P + count.E === CN ** 2) {
      setEnd(true)
      return
    }
    setMyturn(!myturn)
    // ↓lintを部分的に無効にするコメント
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skipFlag])

  useEffect(() => {
    if (!end) return
    console.log("game set!!")
  }, [end])

  useEffect(() => {
    if (restart === 0) return
    console.log("useEffect restart")
    setDisplayMap(cellMap)
    setMyturn(true)
    setSkipFlag("")
    setCount({ P: 2, E: 2 })
    setEnd(false)
    setRestart(0)
    // ↓lintを部分的に無効にするコメント
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restart])

  let Cells = []
  for (const [i, p] of displayMap.entries()) {
    const data = p
    const item = (
      <Cell
        key={`cell_${i}`}
        size={cellSize}
        borderSize={borderSize}
        data={data}
        myturn={myturn}
        setMyturn={setMyturn}
        displayMap={displayMap}
        setDisplayMap={setDisplayMap}
      />)
    Cells.push(item)
  }

  const container = css({
    display: "inline-block",
  })

  const countBoxContainer = css({
    textAlign: "center",
  })


  return (
    <div {...container}>
      <div {...countBoxContainer}>
        <CountBox side="P" count={count.P} borderSize={borderSize} />
        <CountBox side="E" count={count.E} borderSize={borderSize} />
      </div>
      <Layout size={size} borderSize={borderSize}>
        {skipFlag && !end && <SkipMessage skipFlag={skipFlag} />}
        {end && <EndMessage count={count} />}
        {Cells}
      </Layout>
      <div {...countBoxContainer}>
        <MyButton borderSize={borderSize} func={setRestart} val={restart} />
      </div>
    </div>
  )
}

export default Reversi