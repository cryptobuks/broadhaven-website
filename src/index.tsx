import "./helpers/styles-bootstrap"
import * as React from "react"
import ReactDOM from "react-dom"
import { MuiThemeProvider, CssBaseline } from "@material-ui/core"
import Home from "./components/home"
import theme from "./helpers/theme"

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Home />
  </MuiThemeProvider>,
  document.getElementById("root")
)
