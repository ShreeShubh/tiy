"use client"

import React, { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { statesData } from "@/lib/data"
import Button from "../../Button/Button"

const FeaturedStatesCarousel = () => {
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
    <div className='w-full bg-[url("/home/featured-states-bg.png")] bg-cover py-20'>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl text-vns-primary mb-5 font-pacifico">
            Our Featured States
          </h2>
          <p className="text-black mb-12">
            Smart, Safe & Affordable City Guides At Your Finger Tips
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {statesData.map((item, index) => (
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
                      className="w-full h-105 object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

                    {/* Warm Orange Overlay (brand feel) */}
                    <div className="absolute inset-0 bg-vns-primary/40 mix-blend-multiply" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-6">
                      <h3 className="text-3xl font-semibold text-white mb-2 drop-shadow-lg">
                        {item.state}
                      </h3>
                      <p className="text-white/90 text-sm mb-6">
                        {item.highlights}
                      </p>
                      <Button className="group/btn rounded-full! bg-vns-accent! border-vns-accent! hover:scale-none! hover:bg-vns-primary! hover:border-vns-primary!">
                        <div className="flex items-center gap-3">
                          Explore {item.state}
                          <span className="bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1">
                            <MdKeyboardArrowRight
                              size={20}
                              className="text-vns-accent "
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
                className="w-10 h-10 cursor-pointer rounded-full bg-amber-700 hover:bg-amber-800 text-white flex items-center justify-center transition-colors"
                aria-label="Previous slide"
              >
                <MdKeyboardArrowLeft size={24} />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 cursor-pointer rounded-full bg-amber-700 hover:bg-amber-800 text-white flex items-center justify-center transition-colors"
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
                      ? "w-8 bg-vns-primary border-vns-primary"
                      : "w-4 border-2 border-white bg-transparent"
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

export default FeaturedStatesCarousel
