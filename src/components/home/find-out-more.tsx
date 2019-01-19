import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Typography, Button } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    marginTop: theme.spacing.unit * 20,
    marginBottom: theme.spacing.unit * 20
  },
  white: {
    color: "white"
  },
  href: {
    textDecoration: "none"
  }
}))

interface IProps {}

const FindOutMore = (props: IProps) => {
  const classes = useStyles({})

  const email = "hi@broadhaven.tech"
  const subject = "Services Inquiry"
  const body = "Can you tell me more about your services?"
  const getInTouch = `mailto:${email}?subject=${subject}&body=${body}`

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h5" className={classes.white}>
        Want to know more?
      </Typography>{" "}
      <a href={getInTouch} className={classes.href}>
        <Button variant="contained" color="secondary">
          Get In Touch
        </Button>
      </a>
    </div>
  )
}

export default FindOutMore
