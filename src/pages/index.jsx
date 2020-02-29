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
      <div className="h-screen flex">
        <Image
          ref={heroRef}
          fileName="hero2.jpg"
          className="absolute min-h-screen w-full"
          imgStyle={{
            objectFit: "cover",
            objectPosition: "70% 20%",
          }}
        />
        <div className="font-display text-white text-xl absolute h-full max-w-lg inset-y-0 left-0 mr-6 md:mr-auto md:ml-16 lg:mr-auto lg:ml-64 flex flex-col justify-center tracking-wider text-right">
          <p className="pt-40">a fluid flower floats away</p>
          <p>into a swirl of dilapidation and regeneration</p>
        </div>
      </div>
      <div className="py-16 md:py-24"></div>
      <About />
      <div className="py-8 md:py-24" />
      <Shop />
      <div className="py-8 md:py-24" />
      <Contact />
      <div className="h-16 md:h-40" />
    </Layout>
  )
}

export default IndexPage
