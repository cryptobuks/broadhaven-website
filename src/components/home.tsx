import * as React from "react"
import { Grid, Theme, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Cover from "./home/cover"
import Menu from "./home/menu"
import Services from "./home/services"
import Experience from "./home/experience"
import Team from "./home/team"
import Footer from "./home/footer"
import RegisterForWebinar from "./home/register-for-webinar"
import SectionDivider from "./home/section-divider"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "auto auto",
    maxWidth: "1080px",
    overflow: "hidden"
  },
  content: {
    marginTop: "90px",
    marginBottom: "120px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "73px"
    }
  }
}))

interface IProps {}

const Home: React.FunctionComponent<IProps> = props => {
  const classes = useStyles({})
  return (
    <div className={classes.root}>
      <Menu />
      <Grid container className={classes.content}>
        <Grid item xs={12}>
          <Cover anchor="cover" nextAnchor="#services" />
        </Grid>
        <Grid item xs={12}>
          <RegisterForWebinar />
        </Grid>
        <Grid item xs={12}>
          <Services anchor="services" nextAnchor="#experience" />
        </Grid>
        <Grid item xs={12}>
          <Experience anchor="experience" nextAnchor="#team" />
        </Grid>
        <Grid item xs={12}>
          <Team anchor="team" />
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export default Home
