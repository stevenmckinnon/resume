/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from "react"
import "./App.css"
import "./index.css"

import Main from "./sections/main/Main"
import About from "./sections/about/About"
import Resume from "./sections/resume/Resume"
import Footer from "./sections/footer/Footer"
import { useQuery } from "@apollo/client"
import personalDetails from "./queries/query"
import { Header } from "@/components/Header"

const App: React.FC = () => {
  const data = useQuery(personalDetails, {
    variables: { name: "Steve McKinnon" },
  })

  if (data.error != null) {
    return <h1>Error fetching the data!</h1>
  } else if (!data.loading) {
    const personalDetails = data.data.personalDetailses.edges[0].node
    const { workExperiences, educations, intro, socialMedia, name, photo } =
      personalDetails
    const { skills } = personalDetails.skills

    return (
      <div className="App z-0 overflow-x-hidden">
        <Header />
        <Main name={name} intro={intro} socialMedia={socialMedia} />
        <About personalDetails={personalDetails} photo={photo} />
        <Resume work={workExperiences} education={educations} skills={skills} />
        <Footer name={name} socialMedia={socialMedia} />
      </div>
    )
  }

  return (
    <div className="loading">
      <div id="spinContain" />
      <div id="spinContainT" />
    </div>
  )
}

export const AppComp = App
export default App
