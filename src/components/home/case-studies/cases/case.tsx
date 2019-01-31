import * as React from "react"
import { List, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import Item from "./case/item"

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing.unit * 2
  },
  heading: {
    fontWeight: 600
  }
}))

interface IProps {
  icon: IconProp
  title: string
  problem: string
  actions: Array<string>
  outcome: string
}

const Case = (props: IProps) => {
  const classes = useStyles({})
  const { icon, title, problem, actions, outcome } = props

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography className={classes.heading} gutterBottom>
        Business Problem
      </Typography>
      <Typography gutterBottom>{problem}</Typography>
      <Typography className={classes.heading}>What We Did</Typography>
      <List>
        {actions.map((action, i) => (
          <Item key={i} icon={icon} text={action} />
        ))}
      </List>
      <Typography className={classes.heading} gutterBottom>
        Outcome and benefit
      </Typography>
      <Typography gutterBottom>{outcome}</Typography>
    </div>
  )
}

export default Case
