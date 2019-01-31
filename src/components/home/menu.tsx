import * as React from "react"
import { useState } from "react"
import { makeStyles } from "@material-ui/styles"
import { Typography, Button, Collapse, Paper } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from "../common/logo"
import Items from "./menu/items"

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 1000,
    position: "fixed",
    display: "flex",
    alignItems: "flex-start",
    padding: theme.spacing.unit,
    width: "100%",
    maxWidth: "800px",
    background: "white",
    borderBottom: "2px solid",
    borderBottomColor: theme.palette.primary.dark
  },
  grow: {
    flexGrow: 1,
    padding: theme.spacing.unit
  },
  items: {
    textAlign: "right",
    padding: theme.spacing.unit
  }
}))

const Menu: React.FunctionComponent = () => {
  const [showItems, setShowItems] = useState(false)
  const classes = useStyles({})

  return (
    <Paper className={classes.root} square elevation={8}>
      <div className={classes.grow}>
        <Typography variant="h6">
          <Logo />
          broadhaven.tech
        </Typography>
      </div>
      <div className={classes.items}>
        <Button onClick={() => setShowItems(!showItems)}>
          <FontAwesomeIcon icon={showItems ? "times" : "bars"} size="lg" />
        </Button>
        <Collapse in={showItems}>
          <Items hideItems={() => setShowItems(false)} />
        </Collapse>
      </div>
    </Paper>
  )
}

export default Menu
