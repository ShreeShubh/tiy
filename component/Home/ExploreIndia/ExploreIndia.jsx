import React from "react"
import { exploreIndia } from "@/lib/data"
import Image from "next/image"

const ExploreIndia = () => {
  return (
    <div className="pt-12">
      <div className="max-w-6xl mx-auto w-full text-center">
        <h2 className="text-5xl text-vns-primary mb-5 font-pacifico">
          Explore India, Your Way
        </h2>
        <p className="text-black text-lg">
          Smart, Safe & Affordable City Guides At Your Finger Tips
        </p>
        <ul className="grid grid-cols-3 gap-5 mt-8">
          {exploreIndia.map((item, i) => (
            <li
              key={i}
              className="flex flex-col items-center rounded-3xl shadow-xl"
            >
              <Image
                src={item.image}
                width={200}
                height={100}
                alt={item.title}
                className="w-full flex-1 rounded-t-3xl"
              />
              <div className="bg-white px-3 py-8 rounded-b-3xl space-y-3 text-black">
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

export default ExploreIndia
