import * as React from "react"
import { Typography } from "@material-ui/core"
import ScrollableAnchor from "react-scrollable-anchor"

interface IProps {
  anchor?: string
  text: string
}

const SectionTitle = (props: IProps) => {
  const { anchor, text } = props
  return (
    <ScrollableAnchor id={anchor}>
      <Typography variant="h3" gutterBottom>
        {text}
      </Typography>
    </ScrollableAnchor>
  )
}

export default SectionTitle
