import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Typography, Button, Paper } from "@material-ui/core"

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

const RegisterForWebinar = (props: IProps) => {
  const classes = useStyles({})

  const email = "hi@broadhaven.tech"
  const subject = "Webinar Registration Inquiry"
  const body = "I'm interested in attending your next webinar. Please send me the details."
  const registerHref = `mailto:${email}?subject=${subject}&body=${body}`

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h5" className={classes.white}>
        Interested in attending our free Blockchain for Business webinar?
      </Typography>{" "}
      <a href={registerHref} className={classes.href}>
        <Button variant="contained" color="secondary">
          Register Here
        </Button>
      </a>
    </div>
  )
}

export default RegisterForWebinar
