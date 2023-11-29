/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from "react"
import "./index.css"

import Main from "./sections/main/Main"
import About from "./sections/about/About"
import Resume from "./sections/resume/Resume"
import Footer from "./sections/footer/Footer"
import { useQuery } from "@apollo/client"
import personalDetails from "./queries/query"
import { Header } from "@/components/header"
import { Loader } from "@/components/loader"

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
      <div className="z-0 overflow-x-hidden text-center">
        <Header />
        <Main name={name} intro={intro} socialMedia={socialMedia} />
        <About personalDetails={personalDetails} photo={photo} />
        <Resume work={workExperiences} education={educations} skills={skills} />
        <Footer name={name} socialMedia={socialMedia} />
      </div>
    )
  }

  return <Loader />
}

export const AppComp = App
export default App
