import React from "react"
import { Element } from "react-scroll"
import Separator from "../../components/separator"
import Image from "../../components/fluidImage"

const Shop = () => (
  <>
    <Element name="shop" />
    <div className="grid grid-cols-1 lg:grid-cols-11 lg:px-16">
      <div className="lg:hidden">
        <Image
          fileName="catch-2.jpg"
          className="lg:object-cover lg:ml-10 lg:mr-auto lg:min-h-300"
        />
      </div>
      <div className="lg:col-span-2"></div>
      <div className="lg:col-span-3 px-8 lg:px-0">
        <h1 className="text-xxs font-semibold tracking-extreme mt-10">SHOP</h1>
        <h2 className="font-display text-3xl">ON PINKOI</h2>
        <Separator className="my-8" />
        <p className="text-sm lg:mt-12">
          We currently sell our items on Pinkoi online market.
        </p>
      </div>
      <div className="hidden lg:block lg:col-span-6">
        <Image
          fileName="catch-2.jpg"
          className="lg:object-cover lg:ml-10 lg:mr-auto lg:min-h-300"
        />
      </div>
    </div>
  </>
)

export default Shop
