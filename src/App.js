import { useState } from "react"
import "./style.css"

const App = () => {
  const [notification, setNotification] = useState("asd")

  const handleClick = (msg) => {
    setNotification(msg)
  }

  const Grid = () => {
    let row = -1
    let col = 0
    return (
      <div className="grid-container">
        {[...Array(256)].map((x, i) => {
          if (i % 16 === 0 && i !== 0) {
            col++
            row = -1
          }
          row++

          const msg = `[${row}, ${col}]`
          return (
            <button
              key={i}
              className="grid-item"
              onClick={() => handleClick(msg)}
            ></button>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="center">asd</div>
      <div className="gridcenter">
        <Grid />
      </div>
      <div className="center">{notification}</div>
    </>
  )
}
export default App
