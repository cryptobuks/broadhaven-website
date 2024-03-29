import "./helpers/styles-bootstrap"
import * as React from "react"
import ReactDOM from "react-dom"
import { App } from "./app"

ReactDOM.render(<App />, document.getElementById("root"))

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./app", () => {
    ReactDOM.render(<App />, document.getElementById("root"))
  })
}
