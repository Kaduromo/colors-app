import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"

const root = ReactDOM.createRoot(document.getElementById("root"))

toast('Для изменения оттенка нажмите "Пробел"')

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
