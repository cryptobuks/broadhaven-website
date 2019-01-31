import * as React from "react"
import ProfileCard from "./profile-card"

const profile: string[] = [
  "Steve is a highly experienced digital technology consultant, with a wealth of business, sales and technology expertise in Networking, Communications, Software and Cybersecurity, having successfully engaged with business partners and direct clients, locally and globally.",
  "Having spent over 20 years at Cisco, personally driving the huge growth of the Internet, VoIP, Video and Cloud, he is now spearheading the next wave of transformational digital technologies, with a focus and passion for Blockchain.",
  "He is consultative and collaborative, having led cross-functional global virtual teams, and able to confidently build trusted relationships at Executive, Management and Operational levels. His work style is creative and open, yet rigorous with attention to detail, bringing clarity and understanding to complex matters",
  "Above all, he looks forward to supporting people and organisations wanting to leverage the power of Blockchain to create a better future."
]

const qualifications: string[] = []

const Steve = () => (
  <ProfileCard
    photo="images/profile-steve.jpg"
    title="Steve Frost"
    role="Business Development"
    profile={profile}
    qualifications={qualifications}
  />
)

export default Steve
