import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Card as MuiCard, CardContent, Typography } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
    boxShadow: "none"
  },
  icon: {
    color: theme.palette.primary.main,
    padding: theme.spacing.unit * 2,
    textAlign: "center"
  }
}))

interface IProps {
  title: string
  icon: any
  children: string
}

const Card = (props: IProps) => {
  const { title, icon, children } = props
  const classes = useStyles({})

  return (
    <MuiCard className={classes.root}>
      <CardContent>
        <div className={classes.icon}>
          <FontAwesomeIcon icon={icon} size="4x" />
        </div>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{children}</Typography>
      </CardContent>
    </MuiCard>
  )
}

export default Card
