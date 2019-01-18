import * as React from "react"
import { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/styles"
import { IconButton, Zoom, Theme } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    color: theme.palette.primary.dark
  }
}))

interface IProps {
  href: string
  icon: any
  order: number
}

const Method = (props: IProps) => {
  const { href, icon, order } = props
  const classes = useStyles({})
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setInterval(() => {
      setChecked(true)
    }, order * 200)
  })

  return (
    <a href={href} target="_blank">
      <Zoom in={checked}>
        <IconButton className={classes.button}>
          <FontAwesomeIcon icon={icon} size="sm" />
        </IconButton>
      </Zoom>
    </a>
  )
}

export default Method
