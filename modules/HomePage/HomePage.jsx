import React from "react"
import Header from "../../component/Header/Header"
import Button from "../../component/Button/Button"
import HeroBanner from "../../component/HeroBanner/HeroBanner"
import TrustStrip from "../../component/TrustStrip/TrustStrip"
import ExploreIndia from "../../component/Home/ExploreIndia/ExploreIndia"
import PopularCities from "../../component/Home/PopularCities/PopularCities"
import WhyTIY from "../../component/Home/WhyTIY/WhyTIY"

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <TrustStrip />
      <ExploreIndia />
      <PopularCities />
      <WhyTIY />
      {/* <div className="min-h-screen flex flex-col items-center justify-center gap-5">
        <h1 className="text-7xl text-vns-primary font-sans">
          Whereas recognition
        </h1>
        <div className="flex gap-3">
          <Button children="Primary Button" />
          <Button isPrimary={false} children="Secondary Button" />
        </div>
      </div> */}
    </>
  )
}

export default HomePage
