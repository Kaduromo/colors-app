import React, { useEffect, useState } from "react"
import chroma from "chroma-js"
import setRandomColors from "./utils/setRandomColor"
import { toast } from "react-toastify"
import "./column.css"

const Column = () => {
  const iconClasses = "pe-none"
  const bookmark = " bi bi-bookmark"
  const bookmarkFill = " bi bi-bookmark-fill"

  const [color, setColor] = useState()
  const cols = document.querySelectorAll(".col")

  setRandomColors(cols, true)

  useEffect(() => {
    function getColorsFromHash() {
      if (document.location.hash.length > 1) {
        return document.location.hash
          .substring(1)
          .split("-")
          .map((color) => "#" + color)
      }
      return chroma.random()
    }
    setColor(getColorsFromHash())
  }, [])

  if (document.documentElement.clientWidth <= 767.98) {
    document.addEventListener("click", (e) => {
      if (e.target.dataset.type === "update") {
        return setRandomColors(cols)
      }
    })
  }

  document.addEventListener("keydown", (e) => {
    if (e.code.toLowerCase() === "space") {
      e.preventDefault()
      setRandomColors(cols)
    }
  })

  const handleChangeLock = (e) => {
    const bookmarkIcon = e.target.children[0]
    bookmarkIcon.className === iconClasses + bookmark
      ? (bookmarkIcon.className = iconClasses + bookmarkFill)
      : (bookmarkIcon.className = iconClasses + bookmark)
  }

  const handleChangeCopy = (e) => {
    const type = e.target.dataset.type
    toast(`Оттенок ${e.target.textContent} скопирован `)

    if (type === "copy") navigator.clipboard.writeText(e.target.textContent)
  }

  return (
    <div
      className="col"
      style={{
        background: color,
      }}
    >
      <h2 data-type="copy" onClick={handleChangeCopy}>
        color
      </h2>
      <button onClick={handleChangeLock}>
        <i className={iconClasses + bookmark} />
      </button>
    </div>
  )
}

export default Column
