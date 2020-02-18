import React from "react"
import { Link } from "gatsby"
import Logo from "../components/logo"

const Nav = () => (
  <nav className="fixed z-10 py-8 px-16">
    <Logo />
    <ul className="text-beige text-xxs font-semibold tracking-extreme my-8">
      <li className="py-2">ABOUT</li>
      <li className="py-2">SHOP</li>
      <li className="py-2">CONTACT</li>
    </ul>
  </nav>
)

export default Nav
