import * as React from "react"
import { useState, useEffect } from "react"
import { Paper, Typography, Button, Collapse, Fade } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from "../common/logo"
import Items from "./menu/items"

const styles: React.CSSProperties = {}

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 1000,
    position: "fixed",
    display: "flex",
    alignItems: "flex-start",
    padding: theme.spacing.unit,
    width: "100%",
    maxWidth: "1080px",
    background: "white",
    borderBottom: "4px solid",
    borderBottomColor: theme.palette.primary.main
  },
  grow: {
    flexGrow: 1
  },
  items: {
    textAlign: "right"
  }
}))

const Menu = () => {
  const classes = useStyles({})
  const [showItems, setShowItems] = useState(false)

  return (
    <div className={classes.root}>
      <div className={classes.grow}>
        <Typography variant="h6">
          <Logo />
          broadhaven.tech
        </Typography>
      </div>
      <div className={classes.items}>
        <Button onClick={() => setShowItems(!showItems)}>
          <FontAwesomeIcon icon={showItems ? "times" : "bars"} />
        </Button>
        <Collapse in={showItems}>
          <Items hideItems={() => setShowItems(false)} />
        </Collapse>
      </div>
    </div>
  )
}

export default Menu
