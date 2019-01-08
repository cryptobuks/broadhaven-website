import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core"
import Cover from "./home/cover"
import Menu from "./home/menu"
import Services from "./home/services"
import Experience from "./home/experience"
import Team from "./home/team"
import Footer from "./home/footer"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: "auto auto",
    maxWidth: "1080px",
    overflow: "hidden",
    background: theme.palette.background.paper
  }
}))

interface IProps {}

const Home = (props: IProps) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <Menu />
      <Cover anchor="cover" nextAnchor="#services" />
      <div style={{ height: "400px" }} />
      <Services anchor="services" nextAnchor="#experience" />
      <div style={{ height: "400px" }} />
      <Experience anchor="experience" nextAnchor="#team" />
      <div style={{ height: "400px" }} />
      <Team anchor="team" />
      <Footer />
    </div>
  )
}

export default Home
