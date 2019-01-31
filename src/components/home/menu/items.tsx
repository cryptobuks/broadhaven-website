import * as React from "react"
import { List } from "@material-ui/core"
import Link from "./items/link"

interface IProps {
  hideItems: () => void
}

const Items = (props: IProps) => {
  const { hideItems } = props

  return (
    <div>
      <List>
        <Link href="#cover" display="Top" onClick={hideItems} />
        <Link href="#services" display="Services" onClick={hideItems} />
        <Link href="#experience" display="Case Studies" onClick={hideItems} />
        <Link href="#team" display="Team" onClick={hideItems} />
      </List>
    </div>
  )
}

export default Items
