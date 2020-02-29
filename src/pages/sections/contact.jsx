import React from "react"
import { Element } from "react-scroll"
import Separator from "../../components/separator"
import Image from "../../components/fluidImage"

const Contact = () => (
  <>
    <Element name="contact" />
    <div className="grid grid-cols-1 lg:grid-cols-7 lg:px-16">
      <div className="lg:col-span-1"></div>
      <div className="lg:col-span-2">
        <Image
          fileName="catch-3.jpg"
          className="lg:object-cover lg:mr-10 lg:ml-auto lg:-mt-32 lg:min-h-300"
        />
      </div>
      <div className="lg:col-span-4 px-8 lg:px-0">
        <h1 className="text-xxs font-semibold tracking-extreme mt-10">
          CONTACT
        </h1>
        <h2 className="font-display text-3xl">VIA SNS</h2>
        <Separator className="my-8" />
        <p className="text-sm mt-12">
          We have our brand page on Facebook and Instagram. Please feel free for
          contact to get further information.
        </p>
      </div>
    </div>
  </>
)

export default Contact
