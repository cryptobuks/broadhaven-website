import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "400px"
  }
}))

const SectonDivider = () => {
  const classes = useStyles({})

  return <div className={classes.root} />
}

export default SectonDivider
