import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Typography, Grid, Button, Paper } from "@material-ui/core"
import SectionTitle from "../common/seciton-title"
import NextSectionArrow from "../common/next-section-arrow"
import LogoAnimation from "../common/logo-animation"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 4,
    height: "calc(100vh - 68px - 45px - 45px)",
    [theme.breakpoints.down("xs")]: {
      height: "100%"
    }
  },
  grid: {
    height: "100%"
  },
  center: {
    textAlign: "center"
  },
  message: {
    // maxWidth: "600px"
  },
  paddingTop: {
    paddingTop: theme.spacing.unit * 2
  }
}))

interface IProps {
  nextAnchor?: string
  anchor: string
}

const Cover = (props: IProps) => {
  const { anchor, nextAnchor } = props
  const classes = useStyles({})

  return (
    <Paper className={classes.root}>
      <Grid className={classes.grid} container direction="row" justify="center" alignItems="center">
        <Grid item xs={12} md={4} className={classes.center}>
          <LogoAnimation />
        </Grid>
        <Grid item xs={12} md={6} className={classes.paddingTop}>
          <Grid item>
            <Typography variant="h3" gutterBottom>
              Welcome,
            </Typography>
            <Typography gutterBottom variant="body1">
              Blockchain is changing the way information and value are exchanged; and it has the potential to
              transform how we organise our societies.
            </Typography>
            <Typography gutterBottom variant="body1">
              Across all industries, forward-leaning companies have an opportunity to reimagine
              business-to-business and business-to-consumer models.
            </Typography>
            <Typography gutterBottom variant="body1">
              We partner with businesses to <strong>understand this transformation</strong>,{" "}
              <strong>manage disruption</strong>, and <strong>seize opportunities</strong>.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Cover
