import * as React from "react"
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

interface IProps {
  icon: IconProp
  text: string
}

const Item = (props: IProps) => {
  const { icon, text } = props
  return (
    <ListItem>
      <ListItemIcon>
        <FontAwesomeIcon icon={icon} />
      </ListItemIcon>
      <ListItemText secondary={text} />
    </ListItem>
  )
}

export default Item
