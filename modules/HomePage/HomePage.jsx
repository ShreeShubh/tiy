import React from "react"
import Header from "../../component/Header/Header"
import Button from "../../component/Button/Button"
import HeroBanner from "../../component/HeroBanner/HeroBanner"
import TrustStrip from "../../component/TrustStrip/TrustStrip"
import ExploreIndia from "../../component/Home/ExploreIndia/ExploreIndia"
import PopularCities from "../../component/Home/PopularCities/PopularCities"
import WhyTIY from "../../component/Home/WhyTIY/WhyTIY"
import FeaturedStates from "../../component/Home/FeaturedStates/FeaturedStates"
import FeaturedStatesCarousel from "../../component/Home/FeaturedStates/FeaturedStatesCarousel"

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <TrustStrip />
      <ExploreIndia />
      <FeaturedStates />
      <FeaturedStatesCarousel />
      <PopularCities />
      <WhyTIY />
    </>
  )
}

export default HomePage
