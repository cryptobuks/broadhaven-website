import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Typography, Button, Link } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: theme.spacing.unit * 20,
    marginBottom: theme.spacing.unit * 20,
  },
  white: {
    color: "white",
  },
  href: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}))

interface IProps {}

const RegisterForWebinar = (props: IProps) => {
  const classes = useStyles({})

  const registerHref = "https://calendly.com/blockchain_webinar_broadhaven/blockchain-101-webinar"

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h5" className={classes.white}>
        Interested in attending our free Blockchain for Business webinar?
      </Typography>{" "}
      <Link href={registerHref} className={classes.href}>
        <Button variant="contained" color="secondary" size="large">
          Register here
        </Button>
      </Link>
    </div>
  )
}

export default RegisterForWebinar
