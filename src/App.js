import React from 'react';
import { css } from "glamor"

import Reversi from "./reversi"

function App() {
  const containerStyle = css({
    margin: "5%",
    textAlign: "center"
  })
  return (
    <div {...containerStyle}>
      <Reversi size={500} />
    </div>
  );
}

export default App;
