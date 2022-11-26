import React, { useEffect, useState } from "react"
import Column from "./components/column"
import { toast, ToastContainer } from "react-toastify"
import {
  getColorsFromHash,
  updateColorsHash,
} from "./components/utils/setRandomColor"

function App() {
  const [initialState, setInitialState] = useState()

  useEffect(() => {
    setInitialState(
      document.location.hash.length > 1 ? getColorsFromHash().length : 5
    )
  }, [setInitialState])

  const arr = []

  const col = new Array(initialState)

  for (let i = 0; i < initialState; i++) {
    arr.push(col)
  }

  const handleInitialIncrement = () => {
    const color = getColorsFromHash()

    updateColorsHash(color)
    return setInitialState((prevState) => (prevState += 1))
  }

  const handleInitialDecrement = () => {
    return setInitialState((prevState) => (prevState -= 1))
  }

  const handleCopy = () => {
    toast("Выбранные цвета скопированы")
    const cols = document.querySelectorAll(".col").length

    // const str = "/localhost:3000/#7954d9-5fdf45-b9cc2c-08af34-c3b132-97ea70"

    const str = document.location.href.split(/[^\#]*\#/g)[1].split("-")

    console.log(cols)
    console.log(str)

    return navigator.clipboard.writeText(document.location.href)
  }

  return (
    <>
      {arr.length !== 0 && arr.map((el, index) => <Column key={index} />)}

      <div
        style={{
          padding: "10px",
        }}
      />

      <div className="nav-fixed">
        {initialState !== 8 ? (
          <button className="nav-btn" onClick={() => handleInitialIncrement()}>
            <i className="bi bi-plus" />
          </button>
        ) : null}

        <button data-type="update" className="nav-btn">
          <i className="pe-none bi bi-arrow-clockwise" />
        </button>
        <button className="nav-btn" onClick={handleCopy}>
          <i className="pe-none bi bi-clipboard-check" />
        </button>

        {initialState !== 3 ? (
          <button className="nav-btn" onClick={() => handleInitialDecrement()}>
            <i className="bi bi-dash" />
          </button>
        ) : null}
      </div>

      <ToastContainer />
    </>
  )
}

export default App
