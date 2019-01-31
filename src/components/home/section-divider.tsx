import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Theme, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: "center",
    marginTop: theme.spacing.unit * 20,
    marginBottom: theme.spacing.unit * 20
  },
  white: {
    color: "white"
  }
}))

interface IProps {
  text?: string
}

const SectonDivider: React.FunctionComponent<IProps> = props => {
  const classes = useStyles({})
  const { text } = props

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.white}>
        {text}
      </Typography>
    </div>
  )
}

export default SectonDivider
