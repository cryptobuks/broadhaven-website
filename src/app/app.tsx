import { MuiThemeProvider, CssBaseline } from "@material-ui/core"
import * as React from "react"
import { Home } from "../components"
import { theme } from "../helpers"

export const App: React.FC = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Home />
  </MuiThemeProvider>
)
