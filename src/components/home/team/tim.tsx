import * as React from "react"
import ProfileCard from "../../common/profile-card"

const profile = [
  "Tim is a cybersecurity and blockchain specialist. He has over 12 years of leadership and technical experience in the Canadian and UK Armies, and in private industry.",
  "Tim is a classically trained computer scientist and brings the rigour of academia to the blockchain space. He is a proponent for agile and devops methodologies as well as Linux and Open Source",
  "He has built, delivered, and operated technical projects in high stress environments including blockchain dApp prototypes, implemented a blockchain from scratch for fun, and written smart contracts on several blockchains."
]

const qualifications = [
  "Masters of Science in Computing (Information Security and Forensics)",
  "Bachelors of Computer Science (Information Systems Security) with a minor in Mathematics",
  "Certified Information Systems Security Professional"
]

const Tim = () => (
  <ProfileCard
    photo="profile-tim.jpg"
    title="Tim Holmes-Mitra"
    role="CTO"
    nominals="MBE, MSc, CISSP"
    profile={profile}
    qualifications={qualifications}
  />
)

export default Tim
