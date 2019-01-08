import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Button } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing.unit * 2,
    textAlign: "center"
  }
}))

interface IProps {
  anchor?: string
}

const NextSectionArrow = (props: IProps) => {
  const { anchor } = props
  const classes = useStyles({})
  if (!anchor) return null

  return (
    <div className={classes.root}>
      <a href={anchor}>
        <Button color="secondary">
          <FontAwesomeIcon icon="chevron-down" />
        </Button>
      </a>
    </div>
  )
}

export default NextSectionArrow
