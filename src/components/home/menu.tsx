import * as React from "react"
import { useState } from "react"
import { unstable_Box as Box } from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/styles"
import { Typography, Button, Collapse, Paper } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from "../common/logo"
import Items from "./menu/items"

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    padding: theme.spacing.unit,
  },
  items: {
    textAlign: "right",
    padding: theme.spacing.unit,
  },
}))

const Menu: React.FunctionComponent = () => {
  const [showItems, setShowItems] = useState(false)
  const classes = useStyles({})

  return (
    <Box
      position="fixed"
      zIndex={1000}
      boxShadow={8}
      bgcolor="background.paper"
      width="100%"
      maxWidth="800px"
      display="flex"
      alignItems="center"
      borderBottom="4px solid"
      borderColor="primary.dark"
    >
      <div className={classes.grow}>
        <Typography variant="h6">
          <Logo />
          broadhaven.tech
        </Typography>
        <Box
          ml={3.3}
          fontFamily="fontFamily"
          fontWeight="fontWeightLight"
          fontSize="0.80rem"
          color="grey.500"
        >
          Opening blockchain for businesses
        </Box>
      </div>
      <div className={classes.items}>
        <Button onClick={() => setShowItems(!showItems)}>
          <FontAwesomeIcon icon={showItems ? "times" : "bars"} size="lg" />
        </Button>
        <Collapse in={showItems}>
          <Items hideItems={() => setShowItems(false)} />
        </Collapse>
      </div>
    </Box>
  )
}

export default Menu
