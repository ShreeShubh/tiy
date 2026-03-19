import React from "react"
import { exploreIndia } from "@/lib/data"
import Image from "next/image"

const ExploreIndia = () => {
  return (
    <div className="pt-8 sm:pt-10 lg:pt-12">
      <div className="max-w-6xl mx-auto w-full text-center px-4 sm:px-6 lg:px-0">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-vns-primary mb-4 sm:mb-5 font-pacifico">
          Explore India, Your Way
        </h2>

        <p className="text-black text-base sm:text-lg">
          Smart, Safe & Affordable City Guides At Your Finger Tips
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-6 sm:mt-8">
          {exploreIndia.map((item, i) => (
            <li
              key={i}
              className="flex flex-col items-center rounded-3xl shadow-xl overflow-hidden"
            >
              <Image
                src={item.image}
                width={200}
                height={100}
                alt={item.title}
                className="w-full h-48 sm:h-52 lg:h-auto object-cover rounded-t-3xl"
              />

              <div className="bg-white px-4 sm:px-5 py-6 sm:py-8 rounded-b-3xl space-y-2 sm:space-y-3 text-black">
                <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>

                <p className="text-sm sm:text-base">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ExploreIndia
