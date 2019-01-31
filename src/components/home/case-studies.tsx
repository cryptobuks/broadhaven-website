import * as React from "react"
import { useState } from "react"
import { makeStyles } from "@material-ui/styles"
import { Grid, Paper, Button } from "@material-ui/core"
import SwipeableViews from "react-swipeable-views"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SectionTitle from "../common/seciton-title"
import cases from "./case-studies/cases"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  content: {
    margin: "auto auto",
    maxWidth: "700px"
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

const CaseStudies = (props: IProps) => {
  const { anchor, nextAnchor } = props
  const [step, setStep] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const classes = useStyles({})

  const handleAutoPlayNext = () => {
    step + 1 === cases.length ? setStep(0) : setStep(step + 1)
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
      <SectionTitle anchor={anchor} text="Case Studies" />
      <div className={classes.content}>
        <Grid container justify="center">
          <Grid item xs={12} md={8}>
            <SwipeableViews index={step} onChangeIndex={handleAutoPlayNext} enableMouseEvents>
              {cases}
            </SwipeableViews>
          </Grid>
          <Grid item xs={12} md={8}>
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
                  disabled={step + 1 === cases.length}
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

export default CaseStudies
