import * as React from "react"
import Case from "./cases/case"

export default [
  <Case
    icon="gamepad"
    title="Mobile Gaming"
    actions={[
      "Provided market research and competitor analysis on the nascent blockchain games industry;",
      "Drafted and quality controlled a white paper;",
      "Advised on the technical integration and implementation of a decentralised application (dApp) on Ethereum; and",
      "Provide a code review for smart contracts."
    ]}
    problem="The relationship between publishers, players and advertisers in mobile games is asymmetric and unfair."
    outcome="Today, the business is a thought leader in their industry. They have a live MVP and are well positioned to continue their innovation as blockchain layer two technology comes online."
  />,
  <Case
    icon="coins"
    title="Loyalty Points"
    actions={[
      "Workshopped the idea of asynchronous exchange as a suitable blockchain application to solve this problem; and",
      "Helped them build a prototype of the the platform."
    ]}
    problem="Loyalty points are siloed within hundreds of separate accounts - irritating customers and clogging-up company balance sheets."
    outcome="The reimagining of the loyalty points industry with a validated technology solution. Based on this work, the business has subsequently secured funding as is now building the platform."
  />,
  <Case
    icon="link"
    title="Supply Chain Provenance"
    actions={[
      "Built a working prototype to track rare earth minerals through the supply chain and its various state changes through to an electric vehicle battery;",
      "Prototype included an operators hand held scanner as well as management and data explorer; and",
      "Designed a token model to encourage adoption through the use of game theory and mass balance."
    ]}
    problem="Human rights and environmental sustainability are risks for businesses required to demonstrate a responsible supply chain; however, in some industries supply chains can be complex and deep making auditing difficult."
    outcome="The working prototype and model allowed the business to successfully pitch their project to partners and investors."
  />,
  <Case
    icon="futbol"
    title="Collectibles Provenance"
    actions={[
      "Explored the use of non-fungible tokens to verify and track ownership - helping combat the counterfeit market;",
      "We workshopped the advantages and disadvantages of public versus private permissioned blockchain implementation, making recommendations; and",
      "We designed a token ecosystem for non-fungible and fungible tokens to incentive positive user behavior in the market."
    ]}
    problem="High-value and unique items suffer from counterfeiting on the secondhand market. This impacts businesses with pricing models and credibility undermined; consumers also suffer as they are mis-sold counterfeit goods."
    outcome="Using the outputs of our research and insight, the business was able validate their blockchain proposition and make key decisions about their approach."
  />
]
