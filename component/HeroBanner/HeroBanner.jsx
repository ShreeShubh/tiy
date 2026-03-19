import Image from "next/image"
import React from "react"
import Button from "../Button/Button"

const HeroBanner = () => {
  return (
    <div className='bg-[url("/home/home-hero.jpeg")] bg-cover bg-center flex pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-24 lg:pb-28 relative'>
      {/* Overlay */}
      <div className="bg-black/40 inset-0 absolute"></div>

      <div className="max-w-6xl mx-auto w-full z-10 px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col gap-4 sm:gap-5 max-w-2xl">
          {/* Heading */}
          <p className="text-white text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Travel India Beyond <br className="hidden sm:block" />
            The Tourist Path
          </p>

          {/* Subtext */}
          <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
            A self-guided travel companion that helps tourists explore Indian
            cities easily, safely, and affordably.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 sm:gap-5 mt-2">
            <Button>Explore Now</Button>

            <Button
              isPrimary={false}
              className="bg-white border border-white text-black!"
            >
              Watch Video
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
