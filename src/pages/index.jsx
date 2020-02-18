import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/fluidImage"
import SEO from "../components/seo"
import About from "./sections/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="min-h-screen flex">
      <Image
        fileName="hero.jpg"
        className="object-cover absolute min-h-screen w-full"
      />
    </div>
    <div className="container py-40 mx-auto text-center">
      <h1 className="font-display text-lg text-primary">
        a fluid flower floats away
      </h1>
      <h1 className="font-display text-lg text-primary">
        into a swirl of dilapidation and regeneration
      </h1>
    </div>
    <About />
    <div className="min-h-screen" />
  </Layout>
)

export default IndexPage
