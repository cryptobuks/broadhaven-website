import * as React from "react"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  root: {
    paddingRight: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    height: "10px",
    color: theme.palette.common.black
  }
}))

const Logo = () => {
  const classes = useStyles({})
  return <img src="logo.svg" className={classes.root} />
}

export default Logo
