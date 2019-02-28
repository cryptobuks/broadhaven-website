import { createMuiTheme } from "@material-ui/core"
import { library } from "@fortawesome/fontawesome-svg-core"
import { configureAnchors } from "react-scrollable-anchor"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"

configureAnchors({ offset: -130, scrollDuration: 500 })

library.add(fab, fas)

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F84A4B",
    },
    secondary: {
      main: "#C8F4F9",
    },
    background: {
      default: "#707C87",
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    useNextVariants: true,
  },
})

// #F84A4B
// #707C87
// #C8F4F9
// #513B41
// #252221
