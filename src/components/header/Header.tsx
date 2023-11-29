import React, { useEffect, useState } from "react"
import { Button } from "@/components/Button"
import { Link } from "react-scroll"
import "./header.scss"

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const scrollWindow = (): void => {
      const OFFSET: number = 200
      if (window.scrollY > OFFSET && !scrolled) {
        setScrolled(true)
      } else if (window.scrollY <= OFFSET && scrolled) {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", scrollWindow)

    return () => {
      window.removeEventListener("scroll", scrollWindow)
    }
  }, [scrolled])

  console.log("scrolled", scrolled)

  return (
    <header className={`header p-3 z-50 fixed w-full ${scrolled ? "scrolled" : ""}`}>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-center lg:px-8"
        aria-label="Global"
      >
        <Button variant="link" asChild size="lg">
          <Link
            spy
            smooth
            activeClass="active home-section"
            className="link"
            to="home"
          >
            Home
          </Link>
        </Button>
        <Button variant="link" asChild size="lg">
          <Link
            spy
            smooth
            activeClass="active about-section"
            className="link"
            to="about"
          >
            About
          </Link>
        </Button>
        <Button variant="link" asChild size="lg">
          <Link
            spy
            smooth
            activeClass="active resume-section"
            className="link"
            to="resume"
          >
            Resume
          </Link>
        </Button>
      </nav>
    </header>
  )
}

Header.displayName = "Header"

export { Header }
