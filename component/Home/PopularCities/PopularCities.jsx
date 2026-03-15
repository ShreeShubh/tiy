import React from "react"

import Image from "next/image"
import { CheckCircle, Globe, Wallet } from "lucide-react"
import Button from "../../Button/Button"

const PopularCities = () => {
  return (
    <div className='py-20 bg-[url("/home/popular-cities-bg.jpg")] bg-cover bg-center relative'>
      <div className="absolute top-0 left-0 w-full h-20 bg-linear-to-b from-white to-transparent"></div>
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center z-10">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            Popular Cities to Explore
          </h2>

          <p className="text-gray-500 mt-3">
            Explore the world's travel with your fingers
          </p>
          <div className="mt-10 space-y-4">
            <div className="flex items-start gap-4 bg-white shadow-sm rounded-xl p-5">
              <CheckCircle className="mt-1" size={22} />
              <div>
                <h4 className="font-semibold text-gray-900">
                  Supports local businesses
                </h4>
                <p className="text-sm text-gray-500">
                  Travel while supporting authentic local shops and artisans.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white shadow-sm rounded-xl p-5">
              <Globe className="mt-1" size={22} />
              <div>
                <h4 className="font-semibold text-gray-900">
                  Promotes authentic culture
                </h4>
                <p className="text-sm text-gray-500">
                  Discover real India beyond tourist traps.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white shadow-sm rounded-xl p-5">
              <Wallet className="mt-1" size={22} />
              <div>
                <h4 className="font-semibold text-gray-900">
                  Budget-friendly city guides
                </h4>
                <p className="text-sm text-gray-500">
                  Explore cities with affordable self-guided experiences.
                </p>
              </div>
            </div>
          </div>

          <Button className="mt-8">View All Cities</Button>
        </div>
        <div className="absolute bottom-10 right-0 w-[37%]">
          <div className="relative bottom-0 h-105">
            {/* Image 1 */}
            <div className="absolute top-0 left-10 -rotate-6 shadow-xl rounded-xl overflow-hidden">
              <Image
                src="/home/explore-india/budget.png"
                alt="Travel alert"
                width={230}
                height={280}
                className="object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="absolute top-16 right-6 rotate-[8deg] shadow-xl rounded-xl overflow-hidden">
              <Image
                src="/home/explore-india/audio.png"
                alt="Traveler"
                width={240}
                height={280}
                className="object-cover"
              />
            </div>

            {/* Image 3 */}
            <div className="absolute bottom-0 left-28 rotate-3 shadow-xl rounded-xl overflow-hidden">
              <Image
                src="/home/explore-india/budget.png"
                alt="Gateway of India"
                width={250}
                height={180}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularCities
