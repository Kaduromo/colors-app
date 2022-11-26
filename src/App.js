import React, { useEffect, useState } from "react"
import Column from "./components/column"
import { toast, ToastContainer } from "react-toastify"
import { getColorsFromHash } from "./components/utils/setRandomColor"

function App() {
  const [initialState, setInitialState] = useState()

  useEffect(() => {
    setInitialState(
      document.location.hash.length > 1 ? getColorsFromHash().length : 3
    )
  }, [])

  const arr = []

  const col = new Array(initialState)

  for (let i = 0; i < initialState; i++) {
    arr.push(col)
  }

  const handleInitialIncrement = () =>
    setInitialState((prevState) => (prevState += 1))

  const handleInitialDecrement = () =>
    setInitialState((prevState) => (prevState -= 1))

  const handleCopy = () => {
    toast("Скопировано успешно")
    return navigator.clipboard.writeText(document.location.href)
  }

  return (
    <>
      {arr.length !== 0 && arr.map((_, index) => <Column key={index} />)}

      <div
        style={{
          padding: "10px",
        }}
      />

      <div className="nav-fixed">
        {initialState !== 8 ? (
          <button className="nav-btn" onClick={handleInitialIncrement}>
            <i className="pe-none bi bi-plus" />
          </button>
        ) : null}

        <button data-type="update" className="nav-btn">
          <i className="pe-none bi bi-arrow-clockwise" />
        </button>
        <button className="nav-btn" onClick={handleCopy}>
          <i className="pe-none bi bi-clipboard-check" />
        </button>

        {initialState !== 3 ? (
          <button className="nav-btn" onClick={handleInitialDecrement}>
            <i className="pe-none bi bi-dash" />
          </button>
        ) : null}
      </div>

      <ToastContainer />
    </>
  )
}

export default App
