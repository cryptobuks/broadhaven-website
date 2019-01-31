import * as React from "react"
import ProfileCard from "./profile-card"

const profile = [
  "Alasdair has over nine years’ experience delivering products and projects in cyber, physical and people security. His experience is drawn both from Big Four consultancy and within the British Military – working across finance, telecommunications and UK Defence.",
  "He has successfully delivered projects across a wide range of organisations that include: global financial institutions, international telecommunications firms and the Defence Industry. Alasdair is adept at quickly transposing complex technical subjects into plain-speaking, actionable information.",
  "He has delivered timely, accurate and valuable assessments to demanding customers - more recently, focusing on the design and delivery of blockchain solutions across a range of industries."
]

const qualifications = [
  "Certified Cloud Security Professional (CCSP) Associate",
  "ISO 27001 Lead Auditor and Implementer",
  "CompTIA Network+ and Security+",
  "ISO 31000 Trained",
  "COBIT 5 Fundamentals"
]

const Alasdair = () => (
  <ProfileCard
    photo="/images/profile-alasdair.jpg"
    title="Alasdair Macdonald"
    nominals="MA, CCSP"
    role="CEO"
    profile={profile}
    qualifications={qualifications}
  />
)

export default Alasdair
