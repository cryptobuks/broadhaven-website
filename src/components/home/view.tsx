import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Button } from "@material-ui/core"
import ScrollableAnchor from "react-scrollable-anchor"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "80vh",
    marginTop: "60px",
    marginBottom: "60px",
    padding: theme.spacing.unit * 4
  },
  nextSectionArrow: {
    marginTop: theme.spacing.unit * 2,
    textAlign: "center"
  }
}))

interface IView {
  children: React.ReactNode
  nextSectionAnchor?: string
  anchor: string
}

const View = (props: IView) => {
  const { children, nextSectionAnchor, anchor } = props
  const classes = useStyles({})

  return (
    <ScrollableAnchor id={anchor}>
      <div className={classes.root}>
        {children}
        {nextSectionAnchor && (
          <div className={classes.nextSectionArrow}>
            <a href={nextSectionAnchor}>
              <Button color="secondary">
                <FontAwesomeIcon icon="chevron-down" />
              </Button>
            </a>
          </div>
        )}
      </div>
    </ScrollableAnchor>
  )
}

export default View
