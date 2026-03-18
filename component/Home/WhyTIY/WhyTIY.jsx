import Image from "next/image"
import React from "react"
import { whyTIY } from "@/lib/data"

const WhyTIY = () => {
  return (
    <div className="pt-12 pb-20">
      {/* <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-white to-transparent"></div> */}
      <div className="max-w-6xl mx-auto w-full text-center">
        <h2 className="text-5xl text-vns-primary mb-5 font-pacifico">
          Why Travel It Yourself?
        </h2>
        <p className="text-black text-lg">
          A smarter way to explore cities independently
        </p>
        <ul className="grid grid-cols-3 gap-8 mt-8">
          {whyTIY.map((item, i) => (
            <li
              key={i}
              className="flex items-center shadow-xl py-5 px-7 rounded-2xl gap-5 bg-white"
            >
              <Image
                src={item.logo}
                width={80}
                height={80}
                alt={item.title}
                className="self-start"
              />
              <div className="text-black text-left space-y-2">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WhyTIY
