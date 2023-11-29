import { shallow } from "enzyme"
import * as React from "react"
import Main from "../../../sections/main/Main"

describe("Tests the Header component", () => {
  it("renders the Header component", () => {
    const name = "Steve McKinnon"
    const intro = `I'm a Glasgow based front end developer and web designer creating modern web apps in the financial sector.`
    const socialMedia = {
      twitter: "http://twitter.com/stevenmckinnon",
      linkedIn: "https://www.linkedin.com/in/stevenmckinnon92/",
      instagram: "http://instagram.com/stevenmckinnon",
      photography: "http://stevenmckinnon.co.uk",
      github: "https://github.com/stevenmckinnon",
    }
    const wrapper = shallow(
      <Main name={name} intro={intro} socialMedia={socialMedia} />,
    )
    expect(wrapper).toMatchSnapshot()
  })
  it("renders the Header component", () => {
    const name = "Steve McKinnon"
    const socialMedia = {}
    const intro = `I'm a Glasgow based front end developer and web designer creating modern web apps in the financial sector.`
    const wrapper = shallow(
      <Main name={name} intro={intro} socialMedia={socialMedia} />,
    )
    expect(wrapper).toMatchSnapshot()
  })
})
