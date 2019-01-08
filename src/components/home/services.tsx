import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Grid } from "@material-ui/core"
import NextSectionArrow from "../common/next-section-arrow"
import SectionTitle from "../common/seciton-title"
import cards from "./services/cards"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.down("xs")]: {
      height: "100%"
    }
  },
  nextAnchorArrow: {
    marginTop: theme.spacing.unit * 2,
    textAlign: "center"
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
    <div className={classes.root}>
      <Grid container justify="center" spacing={16}>
        <Grid item xs={12}>
          <SectionTitle anchor={anchor} text="Our Services" />
        </Grid>
        {cards.map((card, i) => (
          <Grid item xs={12} md={5} key={i}>
            {card}
          </Grid>
        ))}
      </Grid>
      <NextSectionArrow anchor={nextAnchor} />
    </div>
  )
}

export default Services
