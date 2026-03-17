import Image from "next/image"
import React from "react"

// bg-[#C4390A]

const TrustStrip = () => {
  return (
    <div className="bg-gray-800 flex justify-center">
      <div className="flex items-center p-5 gap-8">
        <p className="text-vns-bg/50 text-2xl">Trusted by:</p>
        <div className="flex items-end">
          {[
            "/home/logo/tripadvisor.png",
            "/home/logo/expedia.png",
            "/home/logo/booking.com.png",
          ].map((src) => (
            <Image
              width={175}
              height={50}
              key={src}
              src={src}
              alt="Trust Logo"
              className="h-10 object-contain p-1 saturate-0 invert"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustStrip
