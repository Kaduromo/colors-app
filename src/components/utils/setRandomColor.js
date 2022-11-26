import chroma from "chroma-js"

export default function setRandomColors(node, isInitial) {
  const colors = isInitial ? getColorsFromHash() : []

  node.forEach((col, index) => {
    const isLocked = col
      .querySelector("i")
      .classList.contains("bi-bookmark-fill")
    const text = col.querySelector("h2")
    const button = col.querySelector("button")

    if (isLocked) {
      colors.push(text.textContent)
      return
    }

    const color = isInitial
      ? colors[index]
        ? colors[index]
        : chroma.random()
      : chroma.random()

    if (!isInitial) {
      colors.push(color)
    }

    text.textContent = color
    col.style.background = color

    setTextColor(text, color)
    setTextColor(button, color)

    const btn = document.querySelectorAll(".nav-btn")
    btn.forEach((b) => setTextColor(b, color))
  })

  updateColorsHash(colors)
}

function setTextColor(text, color) {
  const luminance = chroma(color).luminance()
  text.style.color = luminance > 0.5 ? "black" : "white"
}

function updateColorsHash(colors = []) {
  document.location.hash = colors
    .map((col) => {
      return col.toString().substring(1)
    })
    .join("-")
}

function getColorsFromHash() {
  if (document.location.hash.length > 1) {
    return document.location.hash
      .substring(1)
      .split("-")
      .map((color) => "#" + color)
  }
  return []
}
