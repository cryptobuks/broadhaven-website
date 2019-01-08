import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { IconButton, Theme } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    // color: theme.palette.primary.light
  }
}))

interface IProps {
  href: string
  icon: any
}

const Method = (props: IProps) => {
  const { href, icon } = props
  const classes = useStyles({})
  return (
    <a href={href} target="_blank">
      <IconButton color="secondary" className={classes.button}>
        <FontAwesomeIcon icon={icon} size="sm" />
      </IconButton>
    </a>
  )
}

export default Method
