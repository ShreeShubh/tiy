"use client"

import React from "react"
import Button from "../Button/Button"
import { RiScrollToBottomFill } from "react-icons/ri"
import TrustStrip from "../TrustStrip/TrustStrip"

const HeroBanner = () => {
  const scrollToNext = () => {
    const section = document.getElementById("explore-section")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <div className='flex justify-center items-center bg-[url("/home/home-hero.jpeg")] bg-cover lg:h-screen bg-center pt-24 sm:pt-28 lg:pt-0 pb-20 lg:pb-0 relative'>
      {/* Overlay */}
      <div className="bg-black/40 inset-0 absolute"></div>

      <div className="max-w-6xl mx-auto z-10 flex flex-col items-center gap-4 sm:gap-5 px-4 sm:px-6 lg:px-0">
        {/* Heading */}
        <p className="text-white text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
          Travel India Beyond The Tourist Path
        </p>

        {/* Subtext */}
        <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
          A self-guided travel companion that helps tourists explore Indian
          cities easily, safely, and affordably.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 sm:gap-5 mt-2 self-start lg:self-center">
          <Button>Explore Now</Button>

          <Button isPrimary={false} className="bg-white border border-white">
            Watch Video
          </Button>
        </div>
      </div>
      <div
        onClick={scrollToNext}
        className="hidden lg:block absolute bottom-18 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <RiScrollToBottomFill size={40} className="text-white cursor-pointer" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <TrustStrip />
      </div>
    </div>
  )
}

export default HeroBanner
