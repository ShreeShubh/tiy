import Image from "next/image"
import React from "react"
import { whyTIY } from "@/lib/data"

const WhyTIY = () => {
  return (
    <div className="py-10 lg:py-12">
      <div className="max-w-6xl mx-auto w-full text-center px-4 sm:px-6 lg:px-0">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-vns-primary mb-4 sm:mb-5 font-pacifico">
          Why Travel It Yourself?
        </h2>

        <p className="text-black text-base sm:text-lg">
          A smarter way to explore cities independently
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mt-6 sm:mt-8">
          {whyTIY.map((item, i) => (
            <li
              key={i}
              className="flex items-start sm:items-center shadow-lg hover:shadow-xl transition-shadow duration-300 py-4 sm:py-5 px-4 sm:px-6 lg:px-7 rounded-2xl gap-4 sm:gap-5 bg-white"
            >
              <Image
                src={item.logo}
                width={80}
                height={80}
                alt={item.title}
                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-[80px] lg:h-[80px] object-contain shrink-0"
              />

              <div className="text-black text-left space-y-1 sm:space-y-2">
                <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>

                <p className="text-sm sm:text-base text-gray-600">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WhyTIY
