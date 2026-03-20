import HeroBanner from "../../component/HeroBanner/HeroBanner"
import TrustStrip from "../../component/TrustStrip/TrustStrip"
import FAQ from "../../component/FAQ/FAQ"

import {
  ExploreIndia,
  TrendingDestinations,
  PopularCities,
  TravelByMood,
  WhyTIY,
} from "@/component/Home"

const HomePage = () => {
  return (
    <div className="relative">
      <div className='fixed inset-0 bg-[url("/home/home-bg.png")] bg-cover bg-center -z-10' />
      <div className="relative z-10">
        <HeroBanner />
        {/* <TrustStrip /> */}
        <ExploreIndia />
        <TrendingDestinations />
        <PopularCities />
        <TravelByMood />
        <WhyTIY />
        <FAQ />
      </div>
    </div>
  )
}

export default HomePage
