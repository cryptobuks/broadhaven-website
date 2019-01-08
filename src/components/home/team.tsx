import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Grid, Typography } from "@material-ui/core"
import NextSectionArrow from "../common/next-section-arrow"
import SectionTitle from "../common/seciton-title"
import Alasdair from "./team/alasdair"
import Tim from "./team/tim"
import Steve from "./team/steve"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    marginBottom: "100px",
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.down("xs")]: {
      height: "100%"
    }
  }
}))
interface IProps {
  anchor: string
}

const Team = (props: IProps) => {
  const { anchor } = props
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="flex-start" spacing={16}>
        <Grid item xs={12}>
          <SectionTitle anchor={anchor} text="About Us" />
        </Grid>
        <Grid item xs={12} md={5}>
          <Alasdair />
        </Grid>
        <Grid item xs={12} md={5}>
          <Tim />
        </Grid>
        <Grid item xs={12} md={5}>
          <Steve />
        </Grid>
      </Grid>
    </div>
  )
}

export default Team
