import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Grid, Paper } from "@material-ui/core"
import SwipeableViews from "react-swipeable-views"
import SectionTitle from "../common/seciton-title"
import cards from "./services/cards"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  cards: {
    maxWidth: "400px"
  }
}))
interface IProps {
  nextAnchor?: string
  anchor: string
}

const Services = (props: IProps) => {
  const { anchor, nextAnchor } = props
  const classes = useStyles({})

  return (
    <Paper className={classes.root}>
      <SectionTitle anchor={anchor} text="Our Services" />
      <Grid container justify="center" spacing={16}>
        <Grid item xs={12} className={classes.cards}>
          <SwipeableViews>{cards}</SwipeableViews>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Services
