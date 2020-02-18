import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ fileName, ...rest }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(quality: 90, maxWidth: 3180) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const image = data.images.edges.find(n =>
    n.node.relativePath.includes(fileName)
  )

  return image ? (
    <Img fluid={image.node.childImageSharp.fluid} {...rest} />
  ) : null
}

Image.propTypes = {
  fileName: PropTypes.string.isRequired,
}

export default Image
