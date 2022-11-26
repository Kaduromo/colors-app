import React from "react"
import Column from "./components/column"
import { toast, ToastContainer } from "react-toastify"

function App() {
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
          <button data-type="update" className="nav-btn">
            <i className="pe-none bi bi-arrow-clockwise" />
          </button>
          <button className="nav-btn" onClick={handleCopy}>
            <i className="pe-none bi bi-clipboard-check" />
          </button>
        </div>
      )}
      <ToastContainer />
    </>
  )
}

export default React.memo(App)
