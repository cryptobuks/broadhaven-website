import * as React from "react"
import { ListItem, ListItemText, ListItemIcon, Grid, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles(theme => ({}))

interface IProps {
  icon: any
  title: string
  description: string
}
const Item = (props: IProps) => {
  const { icon, title, description } = props

  const classes = useStyles({})

  return (
    <Grid item xs={12}>
      <Paper>
        <ListItem>
          <ListItemIcon>
            <FontAwesomeIcon icon={icon} size="2x" />
          </ListItemIcon>
          <ListItemText primary={title} secondary={description} />
        </ListItem>
      </Paper>
    </Grid>
  )
}

export default Item
