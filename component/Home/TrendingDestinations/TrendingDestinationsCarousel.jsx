"use client"

import React, { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { citiesData } from "@/lib/data"
import Button from "../../Button/Button"

const TrendingDestinationsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="w-full bg-cover py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-vns-primary mb-4 sm:mb-5 font-pacifico">
            Trending Destinations
          </h2>
          <p className="text-black text-base sm:text-xl">
            What's on Your Wanderlust list? Pick your Next Adventure
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {citiesData.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_280px] md:flex-[0_0_320px] lg:flex-[0_0_350px] min-w-0"
                >
                  <li className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer">
                    {/* Image */}
                    <Image
                      src={item.image}
                      alt={item.state}
                      width={400}
                      height={500}
                      className="w-full h-64 sm:h-80 md:h-96 lg:h-105 object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Warm Orange Overlay (brand feel) */}
                    <div className="absolute inset-0 bg-vns-primary/40 mix-blend-multiply" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end items-start text-center p-4 sm:p-5 md:p-6">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-1 sm:mb-2 drop-shadow-lg">
                        {item.state}
                      </h3>
                      <p className="text-white/90 text-xs sm:text-sm mb-4 sm:mb-5 md:mb-6 line-clamp-2 sm:line-clamp-none">
                        {item.highlights}
                      </p>
                      <Button className="group/btn rounded-full! text-vns-primary! bg-white! border-white! hover:scale-none! hover:bg-vns-primary! hover:border-vns-primary! hover:text-white! text-sm sm:text-base">
                        <div className="flex items-center gap-2 sm:gap-3">
                          Explore {item.state}
                          <span className="bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1">
                            <MdKeyboardArrowRight
                              size={16}
                              className="text-vns-accent sm:w-5 sm:h-5"
                            />
                          </span>
                        </div>
                      </Button>
                    </div>
                  </li>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Navigation Bar */}
          <div className="flex justify-between items-center mt-8">
            {/* Left Side - Navigation Buttons */}
            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 cursor-pointer rounded-full bg-vns-secondary hover:bg-vns-accent text-white flex items-center justify-center transition-colors"
                aria-label="Previous slide"
              >
                <MdKeyboardArrowLeft size={24} />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 cursor-pointer rounded-full bg-vns-secondary hover:bg-vns-accent text-white flex items-center justify-center transition-colors"
                aria-label="Next slide"
              >
                <MdKeyboardArrowRight size={24} />
              </button>
            </div>

            {/* Right Side - Dots Navigation */}
            <div className="flex gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`h-4 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "w-4 bg-vns-primary border-vns-primary"
                      : "w-4 border-2 border-vns-primary bg-transparent"
                  }`}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingDestinationsCarousel
