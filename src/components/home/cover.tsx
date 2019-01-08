import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Typography, Grid } from "@material-ui/core"
import SectionTitle from "../common/seciton-title"
import NextSectionArrow from "../common/next-section-arrow"
import LogoAnimation from "../common/logo-animation"

const useStyles = makeStyles(theme => ({
  root: {
    height: "calc(100vh - 80px - 120px)",
    marginTop: "80px",
    marginBottom: "120px",
    padding: theme.spacing.unit * 2
  },
  grid: {
    height: "100%"
  },
  message: {
    maxWidth: "600px"
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
    <div className={classes.root}>
      <Grid
        container
        justify="space-between"
        direction="column"
        alignItems="center"
        wrap="nowrap"
        className={classes.grid}
      >
        <Grid item>
          <SectionTitle anchor={anchor} text="Welcome" />
        </Grid>
        <Grid item>
          <LogoAnimation />
        </Grid>
        <Grid item>
          <Typography variant="h6" align="center" gutterBottom className={classes.message}>
            At broadhaven, we believe there are credible applications of blockchain that will deliver
            immediate benefit to businesses and their customers. We're here to help you realise these
            benefits.
          </Typography>
        </Grid>
      </Grid>
      <NextSectionArrow anchor={nextAnchor} />
    </div>
  )
}

export default Cover
