import * as React from "react"
import { unstable_Box as Box } from "@material-ui/core/Box"
import { Typography } from "@material-ui/core"
import ScrollableAnchor from "react-scrollable-anchor"
import LogoAnimation from "../common/logo-animation"

interface IProps {
  nextAnchor?: string
  anchor: string
}

export const Cover = (props: IProps) => {
  const { anchor, nextAnchor } = props
  return (
    <Box bgcolor="background.paper" p={{ xs: 2, md: 4 }} borderRadius={8}>
      <Box>
        <Box textAlign="center">
          <LogoAnimation />
        </Box>
        <Box>
          <ScrollableAnchor id="cover">
            <Typography variant="h3" gutterBottom>
              Welcome,
            </Typography>
          </ScrollableAnchor>
          <Typography gutterBottom variant="body1">
            Blockchain is changing the way information and value are exchanged; and it has the
            potential to transform how we organise our societies.
          </Typography>
          <Typography gutterBottom variant="body1">
            Across all industries, forward-leaning companies have an opportunity to reimagine
            business-to-business and business-to-consumer models.
          </Typography>
          <Typography gutterBottom variant="body1">
            We partner with businesses to <strong>understand this transformation</strong>,{" "}
            <strong>manage disruption</strong>, and <strong>seize opportunities</strong>.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
