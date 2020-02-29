import React, { useState, useEffect } from "react"
import { Link as BaseLink, animateScroll } from "react-scroll"
import Burger from "@animated-burgers/burger-squeeze"
import { throttle } from "lodash"
import cx from "classnames"
import LogoSvg from "../images/logo.svg"

import "@animated-burgers/burger-squeeze/dist/styles.css"

const Link = props => (
  <BaseLink
    activeClass="text-secondary"
    spy
    smooth
    hashSpy
    offset={-50}
    duration={400}
    {...props}
  />
)

const Nav = ({ isOpen, onOpen, onClose }) => {
  const [isDark, setIsDark] = useState(false)
  const handleScroll = throttle(() => {
    if (window.innerHeight - 200 < document.scrollingElement.scrollTop) {
      setIsDark(true)
    } else {
      setIsDark(false)
    }
  }, 150)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <>
      <header className="lg:hidden fixed top-0 left-0 w-screen p-8 z-50">
        <Burger
          className="fill-current text-beige"
          onClick={() => {
            if (isOpen) {
              onClose()
            } else {
              onOpen()
            }
          }}
          isOpen={isOpen}
        />
      </header>
      {isOpen && (
        <nav className="lg:hidden fixed top-0 left-0 z-40 h-screen w-screen bg-primary text-beige">
          <ul>
            <li>ABOUT</li>
          </ul>
        </nav>
      )}
      <nav className="hidden lg:block fixed z-10 py-16 px-20 w-64">
        <LogoSvg
          className={cx(
            {
              "text-secondary": !isDark,
              "text-primary": isDark,
            },
            "fill-current transition duration-300 ease-in-out cursor-pointer"
          )}
          onClick={() => animateScroll.scrollToTop({ duration: 400 })}
        />
        <ul
          className={cx(
            "text-xxs font-semibold tracking-extreme my-8 transition duration-300 ease-in-out",
            {
              "text-beige": !isDark,
              "text-primary": isDark,
            }
          )}
        >
          <li className="py-2 cursor-pointer">
            <Link to="about">ABOUT</Link>
          </li>
          <li className="py-2 cursor-pointer">
            <Link to="shop">SHOP</Link>
          </li>
          <li className="py-2 cursor-pointer">
            <Link to="contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
