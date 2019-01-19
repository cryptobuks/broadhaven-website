import * as React from "react"
import { useState } from "react"
import { makeStyles } from "@material-ui/styles"
import { Grid, Paper, Button } from "@material-ui/core"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SectionTitle from "../common/seciton-title"
import cards from "./services/cards"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  content: {
    margin: "auto auto",
    maxWidth: "600px"
  },
  flex: {
    display: "flex"
  },
  grow: {
    flexGrow: 1,
    textAlign: "left"
  }
}))
interface IProps {
  nextAnchor?: string
  anchor: string
}

const Services = (props: IProps) => {
  const { anchor, nextAnchor } = props
  const [step, setStep] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const classes = useStyles({})

  const handleAutoPlayNext = () => {
    step + 1 === cards.length ? setStep(0) : setStep(step + 1)
  }

  const back = () => {
    autoPlay && setAutoPlay(false)
    setStep(step - 1)
  }

  const next = () => {
    autoPlay && setAutoPlay(false)
    setStep(step + 1)
  }

  return (
    <Paper className={classes.root}>
      <SectionTitle anchor={anchor} text="Our Services" />
      <div className={classes.content}>
        <Grid container justify="center">
          <Grid item xs={12}>
            <AutoPlaySwipeableViews
              autoplay={autoPlay}
              index={step}
              onChangeIndex={handleAutoPlayNext}
              enableMouseEvents
            >
              {cards}
            </AutoPlaySwipeableViews>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.flex}>
              <div className={classes.grow}>
                <Button variant="contained" color="primary" onClick={back} disabled={step === 0}>
                  <FontAwesomeIcon icon="angle-left" />
                </Button>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={next}
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
