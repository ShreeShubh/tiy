import Image from "next/image"
import React from "react"
import Button from "../Button/Button"

const HeroBanner = () => {
  return (
    <div className='bg-[url("/home/home-hero.jpeg")] bg-cover bg-center flex pt-32 pb-28 relative'>
      <div className="bg-black/30 inset-0 absolute"></div>
      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="flex flex-col gap-3">
          <p className="text-white text-6xl">
            Travel India Beyond <br /> The Tourist Path
          </p>

          <p className="text-white text-lg">
            A self-guided travel companion that helps tourists <br /> explore
            Indian cities easily, safely, and affordably.
          </p>
          <div className="flex gap-5">
            <Button children="Explore Now" />
            <Button
              isPrimary={false}
              children="Watch Video"
              className="bg-transparent! border-white! text-white!"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
