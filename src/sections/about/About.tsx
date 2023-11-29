import * as React from "react"
import { Element } from "react-scroll"
import { PersonalDetails, Photo } from "../../interfaces"
import { AtSign, Download } from "lucide-react"
import { Button } from "@/components/Button"

interface Props {
  photo: Photo
  personalDetails: PersonalDetails
}

const About: React.FC<Props> = ({ photo, personalDetails }) => (
  <Element name="about" className="bg-primary pt-8 pb-8">
    <section id="about" className="flex justify-center">
      <div className="flex flex-col md:grid grid-cols-3 p-6 max-w-4xl">
        <div className="col-span-1 flex justify-center items-start p-6">
          <img src={photo.url} className="w-40 h-40 rounded-full" alt="profile" />
        </div>
        <div className="col-span-2 p0 md:p-6">
          <h2 className="text-white text-lg font-bold font-heading">About Me</h2>
          <p className="text-white font-body">{personalDetails.biography}</p>
          <div className="m-8">
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-white text-lg font-bold font-heading">
                Contact Details
              </h2>
              <p className="text-white font-body">
                <span>
                  <b>{personalDetails.name}</b>
                </span>
                <br />
                <span>{personalDetails.location}</span>
                <br />
              </p>
              <Button variant="secondary" asChild>
                <a
                  href={`mailto:${personalDetails.email}`}
                  className="flex gap-2 items-center justify-center mt-6 font-body"
                >
                  <AtSign size={16} /> Email me!
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a
                  href={personalDetails.cvUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex gap-2 items-center justify-center font-body"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Element>
)

export default About
