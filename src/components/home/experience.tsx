import * as React from "react"
import { Grid, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Item from "./experience/item"
import SectionTitle from "../common/seciton-title"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 4
  }
}))

const programatic =
  "We partnered with a media agency to explore how blockchain brings transparency and efficiencies to the media supply chain."
const mobileGames =
  "We partnered with a mobile game publisher to understand how fungible and non-fungible tokens could be used to transform the relationship between gamers and publishers."
const supplyChain =
  "Designed the token economics, technical architecture, and built a prototype to track rare earth minerals from mine to electric vehicle battery."
const capitalRaises =
  "White paper developed for a innovative application of security tokens - focussed on investment markets."
const loyaltyPoints =
  "Supported the ideation and development of a prototype for a customer loyalty and rewards business."
const hyperTargeted =
  "Developed the concept and a working prototype for a privacy-focussed advertising platform which used the blockchain as the intermediary between advertisers and consumers."
const renewables =
  "Workshopped multiple different applications of blockchain technology to support projects within the environmental services sector."

interface IProps {
  nextAnchor?: string
  anchor: string
}

const Experience = (props: IProps) => {
  const { anchor, nextAnchor } = props
  const classes = useStyles({})

  return (
    <Paper className={classes.root}>
      <Grid container justify="center" spacing={16}>
        <Grid item xs={12}>
          <SectionTitle anchor={anchor} text="Our Experience" />
        </Grid>
        <Grid container spacing={8}>
          <Item icon="broadcast-tower" title="Programatic Advertising" description={programatic} />
          <Item icon="gamepad" title="Mobile Games" description={mobileGames} />
          <Item icon="link" title="Supply Chain Provenance" description={supplyChain} />
          <Item icon="piggy-bank" title="Capital Raises" description={capitalRaises} />
          <Item icon="coins" title="Loyalty Points" description={loyaltyPoints} />
          <Item
            icon="bullseye"
            title="Hyper-targeted and Localised Advertising"
            description={hyperTargeted}
          />
          <Item icon="solar-panel" title="Renewable Energy and Carbon Trading" description={renewables} />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Experience
