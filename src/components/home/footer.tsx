import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Grid, Theme } from "@material-ui/core"
import Method from "./footer/method"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 1000,
    position: "fixed",
    display: "flex",
    bottom: "0px",
    width: "100%",
    maxWidth: "800px",
    textAlign: "center",
    borderTop: `4px solid ${theme.palette.primary.dark}`,
    background: theme.palette.background.paper
  }
}))

const Footer = () => {
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Method order={1} href="mailto:hi@broadhaven.tech" icon="envelope-square" />
          <Method order={2} href="https://medium.com/@broadhaven.tech" icon={["fab", "medium"]} />
          <Method order={3} href="https://twitter.com/broadhaventech" icon={["fab", "twitter"]} />
          <Method order={4} href="https://github.com/tim-hm" icon={["fab", "github"]} />
          <Method
            order={5}
            href="https://www.youtube.com/channel/UC_kyKfCEE67GEOSb2oat7bA"
            icon={["fab", "youtube"]}
          />
          {/* <Method order={6} href="https://instagram.com/" icon={["fab", "instagram"]} /> */}
          <Method order={6} href="https://audioboom.com/channels/4985829" icon="podcast" />
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
