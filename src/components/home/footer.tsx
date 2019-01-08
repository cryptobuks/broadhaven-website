import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Grid, Typography, Theme } from "@material-ui/core"
import Method from "./footer/method"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 1000,
    position: "fixed",
    display: "flex",
    bottom: "0px",
    width: "100%",
    maxWidth: "1080px",
    textAlign: "center",
    borderTop: `1px solid ${theme.palette.secondary.light}`,
    background: theme.palette.background.paper
  }
}))

const Footer = () => {
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Method href="mailto:hi@broadhaven.tech" icon="envelope-square" />
          <Method href="https://medium.com/@broadhaven.tech" icon={["fab", "medium"]} />
          <Method href="https://twitter.com/broadhaventech" icon={["fab", "twitter"]} />
          <Method href="https://github.com/tim-hm" icon={["fab", "github"]} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
