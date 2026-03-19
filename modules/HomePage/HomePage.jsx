import HeroBanner from "../../component/HeroBanner/HeroBanner"
import TrustStrip from "../../component/TrustStrip/TrustStrip"
import ExploreIndia from "../../component/Home/ExploreIndia/ExploreIndia"
import PopularCities from "../../component/Home/PopularCities/PopularCities"
import WhyTIY from "../../component/Home/WhyTIY/WhyTIY"
import TravelByMood from "../../component/Home/TravelByMood/TravelByMood"
import FeaturedStatesCarousel from "../../component/Home/FeaturedStates/FeaturedStatesCarousel"
import TrendingCitiesCarousel from "../../component/Home/TrendingCities/TrendingCitiesCarousel"
import FAQ from "../../component/FAQ/FAQ"

const HomePage = () => {
  return (
    <div className="relative">
      <div className='fixed inset-0 bg-[url("/home/home-bg.png")] bg-cover bg-center -z-10' />
      <div className="relative z-10">
        <HeroBanner />
        <TrustStrip />
        <ExploreIndia />
        <TrendingCitiesCarousel />
        <PopularCities />
        <FeaturedStatesCarousel />
        <TravelByMood />
        <WhyTIY />
        <FAQ />
      </div>
    </div>
  )
}

export default HomePage
