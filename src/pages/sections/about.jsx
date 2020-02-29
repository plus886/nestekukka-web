import React from "react"
import { Element } from "react-scroll"
import Separator from "../../components/separator"
import Image from "../../components/fluidImage"

const About = () => (
  <>
    <Element name="about" />
    <div className="grid grid-cols-1 lg:grid-cols-7 lg:px-16">
      <div className="lg:col-span-1"></div>
      <div className="lg:col-span-3">
        <Image
          fileName="catch-1.jpg"
          className="lg:mr-10 lg:ml-auto lg:min-h-500 lg:object-cover"
        />
      </div>
      <div className="px-4 lg:px-0 lg:col-span-3">
        <h1 className="text-xxs font-semibold tracking-extreme mt-10">ABOUT</h1>
        <h2 className="font-display text-3xl">NESTEKUKKA.</h2>
        <Separator className="my-8" />
        <p className="text-sm mt-12">
          NESTEKUKKA means "fluid flower" in Finnish.
        </p>
      </div>
    </div>
  </>
)

export default About
