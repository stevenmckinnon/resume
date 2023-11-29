import * as React from "react"
import { Link, Element } from "react-scroll"

import { type SocialMedia } from "../../interfaces"
import "./main.scss"
import {
  ChevronDown,
  Camera,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react"

interface Props {
  name: string
  intro: string
  socialMedia: SocialMedia
}

const Main: React.FC<Props> = ({ name, intro, socialMedia }) => {
  return (
    <Element
      name="home"
      className="home h-full flex flex-col align justify-center items-center p-6"
    >
      <div className="gap-3 flex flex-col align justify-center items-center max-w-4xl">
        <h1 className="text-white text-4xl md:text-8xl drop-shadow-md font-heading">{`I'm ${name}.`}</h1>

        <h3 className="text-white text-md md:text-lg font-body">
          {intro}
          <br />
          {`Let's `}
          <Link
            smooth
            className="smoothscroll text-white hover:text-teal-300 cursor-pointer"
            to="about"
          >
            start scrolling
          </Link>{" "}
          and learn more{" "}
          <Link
            smooth
            className="smoothscroll text-white hover:text-teal-300 cursor-pointer"
            to="about"
          >
            about me
          </Link>
          .
        </h3>
        <hr />
        <ul className="social flex gap-5 justify-center">
          {socialMedia.twitter != null && (
            <li>
              <a
                href={socialMedia.twitter}
                className="text-xl text-white hover:text-teal-300 cursor-pointer"
              >
                <Twitter />
              </a>
            </li>
          )}
          {socialMedia.linkedIn != null && (
            <li>
              <a
                href={socialMedia.linkedIn}
                className="text-xl text-white hover:text-teal-300 cursor-pointer"
              >
                <Linkedin />
              </a>
            </li>
          )}
          {socialMedia.instagram != null && (
            <li>
              <a
                href={socialMedia.instagram}
                className="text-xl text-white hover:text-teal-300 cursor-pointer"
              >
                <Instagram />
              </a>
            </li>
          )}
          {socialMedia.photography != null && (
            <li>
              <a
                href={socialMedia.photography}
                title={`${name} Photography`}
                className="text-xl text-white hover:text-teal-300 cursor-pointer"
              >
                <Camera />
              </a>
            </li>
          )}
          {socialMedia.github != null && (
            <li>
              <a
                href={socialMedia.github}
                className="text-xl text-white hover:text-teal-300 cursor-pointer"
              >
                <Github />
              </a>
            </li>
          )}
        </ul>
      </div>
      <div className="scrolldown absolute bottom-5 flex justify-center">
        <Link
          className="motion-safe:animate-bounce text-2xl text-white hover:text-teal-300 cursor-pointer"
          to="about"
          smooth={true}
        >
          <ChevronDown size={50} />
        </Link>
      </div>
    </Element>
  )
}

export default Main
