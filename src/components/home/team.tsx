import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Grid, Typography, Paper } from "@material-ui/core"
import SectionTitle from "../common/seciton-title"
import Alasdair from "./team/alasdair"
import Tim from "./team/tim"
import Steve from "./team/steve"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    padding: theme.spacing.unit * 4
  }
}))
interface IProps {
  anchor: string
}

const Team = (props: IProps) => {
  const { anchor } = props
  const classes = useStyles({})

  return (
    <Paper className={classes.root}>
      <Grid container justify="center" alignItems="flex-start" spacing={16}>
        <Grid item xs={12}>
          <SectionTitle anchor={anchor} text="About Us" />
          <Typography variant="body2" gutterBottom>
            We formed Broadhaven to bring expertise, discipline, and execution to partners looking to explore
            and capitalise on the potential of blockchain.
          </Typography>
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
    </Paper>
  )
}

export default Team
