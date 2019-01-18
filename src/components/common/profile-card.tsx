import * as React from "react"
import { useState } from "react"
import { makeStyles } from "@material-ui/styles"
import { Card, CardContent, CardActions, Button, Typography, Collapse, CardMedia } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "350px"
  },
  nominals: {
    display: "inline",
    paddingLeft: theme.spacing.unit
  }
}))

interface IProps {
  photo: string
  title: string
  role: string
  nominals?: string
  profile: string[]
  qualifications: string[]
}

const ProfileCard = (props: IProps) => {
  const { photo, title, role, nominals, profile, qualifications } = props
  const classes = useStyles({})
  const [expand, setExpand] = useState(false)

  return (
    <Card className={classes.root}>
      <CardMedia component="img" image={photo} />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
          {nominals && (
            <Typography className={classes.nominals} color="textSecondary" variant="caption">
              {nominals}
            </Typography>
          )}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {role}
        </Typography>
        <Collapse in={expand} collapsedHeight="150px" timeout="auto">
          {profile.map((para, key) => (
            <Typography key={key} gutterBottom>
              {para}
            </Typography>
          ))}
          {qualifications.length > 0 && (
            <>
              <Typography variant="subtitle1">Qualifications</Typography>
              <ul>
                {qualifications.map((qual, i) => (
                  <li key={i}>
                    <Typography>{qual}</Typography>
                  </li>
                ))}
              </ul>
            </>
          )}
        </Collapse>
        {!expand && <span>...</span>}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => setExpand(!expand)}>
          Show {expand ? "Less" : "More"}
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProfileCard
