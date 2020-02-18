import React from "react"
import { Link } from "gatsby"

import Image from "../../components/fluidImage"

const About = () => (
  <div className="grid grid-cols-7 px-16">
    <div className="col-span-1"></div>
    <div className="col-span-3">
      <Image
        fileName="catch-1.jpg"
        className="object-cover mr-10 ml-auto"
        style={{ minHeight: 500 }}
      />
    </div>
    <div className="col-span-3">
      <h1 className="text-xxs font-semibold tracking-extreme mt-10">ABOUT</h1>
      <h2 className="font-display text-3xl">NESTEKUKKA.</h2>
      <p className="text-sm mt-12">
        With the launch of our magazine's second edition, we celebrate the dawn
        of Spring, and together we embark on new journeys of the body and mind.
        And so, in this issue, we visit a small, family-run knitwear factory
        near Lake Como that makes some of our most luxurious and coveted pieces
        of the season. And, we check-in to the intimate and charming Hotel
        Heritage in Brugge, the famous Cal-A-Vie spa in southern California, and
        one of the world's most remote lodges, The Tikchik Lodge in Bristol Bay,
        Alaska.
      </p>
    </div>
  </div>
)

export default About
