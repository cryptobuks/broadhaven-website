import * as React from "react"
import { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/styles"
import { IconButton, Zoom, Theme } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    color: theme.palette.primary.dark
  },
  pulse: {
    animation: "pulse 3s infinite",
    animationDelay: "5s",
    "&:hover": {
      animation: "none"
    }
  },
  "@keyframes pulse": {
    "0%": {
      boxShadow: "0 0 0 0 rgba(248,74,75, 0.6)"
    },
    "70%": {
      boxShadow: "0 0 0 10px rgba(248,74,75, 0)"
    },
    "100%": {
      boxShadow: "0 0 0 0 rgba(248,74,75, 0)"
    }
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
    }, order * 500)
  })

  return (
    <a href={href} target="_blank">
      <Zoom in={checked}>
        <IconButton className={classes.button}>
          <FontAwesomeIcon icon={icon} size="sm" className={classes.pulse} />
        </IconButton>
      </Zoom>
    </a>
  )
}

export default Method
