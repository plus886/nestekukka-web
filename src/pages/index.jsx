import React from "react"

import Layout from "../components/layout"
import Image from "../components/fluidImage"
import SEO from "../components/seo"
import About from "./sections/about"
import Shop from "./sections/shop"
import Contact from "./sections/contact"

const IndexPage = ({ heroRef }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="min-h-screen flex">
        <Image
          ref={heroRef}
          fileName="hero2.jpg"
          className="object-cover absolute min-h-screen w-full"
        />
        <div className="font-display text-white text-xl absolute h-full max-w-lg inset-y-0 left-0 mr-6 lg:mr-auto lg:ml-64 flex flex-col justify-center tracking-wider text-right">
          <p className="pt-40">a fluid flower floats away</p>
          <p>into a swirl of dilapidation and regeneration</p>
        </div>
      </div>
      <div className="py-24">
        {/* <h1 className="font-display text-lg text-primary">
          a fluid flower floats away
        </h1>
        <h1 className="font-display text-lg text-primary">
          into a swirl of dilapidation and regeneration
        </h1> */}
      </div>
      <About />
      <div className="py-24" />
      <Shop />
      <div className="py-24" />
      <Contact />
      <div className="h-40" />
    </Layout>
  )
}

export default IndexPage
