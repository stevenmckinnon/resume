import { shallow } from "enzyme"
import * as React from "react"
import About from "../../../sections/about/About"

describe("Tests the About component", () => {
  it("renders the About component", () => {
    const details = {
      name: "John Smith",
      location: "New York, NY",
      biography: "I am a dev, hear me roar",
      cvUrl: "http://url.com",
      email: "hello@email.com",
    }
    const photo = {
      url: "handle",
    }
    const wrapper = shallow(<About personalDetails={details} photo={photo} />)
    expect(wrapper).toMatchSnapshot()
  })
})
