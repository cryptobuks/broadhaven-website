import * as React from "react"
import { useState } from "react"
import { makeStyles } from "@material-ui/styles"
import { Grid, Paper, Button } from "@material-ui/core"
import SwipeableViews from "react-swipeable-views"
import SectionTitle from "../common/seciton-title"
import cards from "./services/cards"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 4,
    textAlign: "center"
  },
  content: {
    margin: "auto auto"
  },
  flex: {
    display: "flex"
  },
  grow: {
    flexGrow: 1
  }
}))
interface IProps {
  nextAnchor?: string
  anchor: string
}

const Services = (props: IProps) => {
  const { anchor, nextAnchor } = props
  const [step, setStep] = useState(0)
  const classes = useStyles({})

  return (
    <Paper className={classes.root}>
      <SectionTitle anchor={anchor} text="Our Services" />
      <div className={classes.content}>
        <Grid container justify="center">
          <Grid item xs={12}>
            <SwipeableViews index={step}>{cards}</SwipeableViews>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.flex}>
              <div className={classes.grow}>
                <Button variant="raised" onClick={() => setStep(step - 1)} disabled={step === 0}>
                  <FontAwesomeIcon icon="angle-left" />
                </Button>
              </div>
              <div>
                <Button
                  variant="raised"
                  onClick={() => setStep(step + 1)}
                  disabled={step + 1 === cards.length}
                >
                  <FontAwesomeIcon icon="angle-right" />
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Paper>
  )
}

export default Services
