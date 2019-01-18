import * as React from "react"
import { ListItem, ListItemText } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "underline",
    color: theme.palette.primary.dark,
    "&:hover": {
      textDecoration: "none"
    }
  }
}))

interface IProps {
  display: string
  href: string
  onClick: () => void
}

const Items = (props: IProps) => {
  const { display, href, onClick } = props

  const classes = useStyles({})

  return (
    <a href={href} className={classes.link}>
      <ListItem button onClick={onClick}>
        <ListItemText primary={display} />
      </ListItem>
    </a>
  )
}

export default Items
