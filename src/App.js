import Column from "./components/column"
import { toast, ToastContainer } from "react-toastify"
import setRandomColors from "./components/utils/setRandomColor"

function App() {
  // const initialColumn = 5

  const cols = document.querySelectorAll(".col")

  cols.forEach((col) => {
    const isLocked = col
      .querySelector("i")
      .classList.contains("bi-bookmark-fill")
    const text = col.querySelector("h2")

    if (isLocked) return toast(`Оттенок ${text.textContent} заблокирован `)
  })

  const handleUpdate = () => {
    setRandomColors(cols)
  }
  const handleCopy = (e) => {
    toast("Выбранные цвета скопированы")
    return navigator.clipboard.writeText(document.location.href)
  }
  return (
    <>
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
      {document.documentElement.clientWidth <= 767.98 && (
        <div className="nav-fixed">
          <button className="update" onClick={handleUpdate}>
            <i className="bi bi-arrow-clockwise"></i>
          </button>
          <button className="update" onClick={handleCopy}>
            <i className="bi bi-clipboard-check"></i>{" "}
          </button>
        </div>
      )}
      <ToastContainer />
    </>
  )
}

export default App
