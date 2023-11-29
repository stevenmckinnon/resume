import * as React from "react"
import { Link } from "react-scroll"
import { type SocialMedia } from "../../interfaces"
import {
  Camera,
  ChevronUp,
  Coffee,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react"

interface Props {
  name: string
  socialMedia: SocialMedia
}

const Footer: React.FC<Props> = ({ name, socialMedia }) => (
  <footer className="bg-primary flex flex-col gap-3 justify-center items-center p-10">
    <ul className="flex gap-3">
      {socialMedia.twitter && (
        <li>
          <a
            href={socialMedia.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-white hover:text-teal-300 cursor-pointer"
          >
            <Twitter />
          </a>
        </li>
      )}
      {socialMedia.linkedIn && (
        <li>
          <a
            href={socialMedia.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-white hover:text-teal-300 cursor-pointer"
          >
            <Linkedin />
          </a>
        </li>
      )}
      {socialMedia.instagram && (
        <li>
          <a
            href={socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-white hover:text-teal-300 cursor-pointer"
          >
            <Instagram />
          </a>
        </li>
      )}
      {socialMedia.photography && (
        <li>
          <a
            href={socialMedia.photography}
            target="_blank"
            rel="noopener noreferrer"
            title={`${name} Photography`}
            className="text-xl text-white hover:text-teal-300 cursor-pointer"
          >
            <Camera />
          </a>
        </li>
      )}
      {socialMedia.github && (
        <li>
          <a
            href={socialMedia.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-white hover:text-teal-300 cursor-pointer"
          >
            <Github />
          </a>
        </li>
      )}
      {socialMedia.buyMeACoffee && (
        <li>
          <a
            href={socialMedia.buyMeACoffee}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-white hover:text-teal-300 cursor-pointer"
          >
            <Coffee />
          </a>
        </li>
      )}
    </ul>
    <ul className="copyright">
      <li>
        <p className="text-white font-body">
          © Copyright {new Date().getFullYear()} {name}
        </p>
      </li>
    </ul>
    <Link
      className="text-2xl text-white hover:text-teal-300 cursor-pointer"
      title="Back to Top"
      to="home"
      smooth={true}
    >
      <ChevronUp size={50} />
    </Link>
  </footer>
)

export default Footer
