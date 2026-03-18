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
import TrendingCitiesCarousel from "../../component/Home/TrendingCities/TrendingCitiesCarousel"

const HomePage = () => {
  return (
    <div className="relative">
      {/* Fixed Background */}
      <div className='fixed inset-0 bg-[url("/home/home-bg.png")] bg-cover bg-center -z-10' />

      {/* Content */}
      <div className="relative z-10">
        <HeroBanner />
        <TrustStrip />
        <ExploreIndia />
        <TrendingCitiesCarousel />
        {/* <FeaturedStates /> */}
        <FeaturedStatesCarousel />
        <PopularCities />
        <WhyTIY />
      </div>
    </div>
  )
}

export default HomePage
