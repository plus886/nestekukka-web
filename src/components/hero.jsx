import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = props => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 3180) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.image.childImageSharp.fluid} {...props} />
}

export default Hero
