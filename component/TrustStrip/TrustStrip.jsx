"use client"

import Marquee from "react-fast-marquee"
import CountUp from "react-countup"
import React, { useEffect, useState } from "react"
import { trustStrip } from "../../lib/data"

// bg-[#C4390A]

const TrustStrip = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="bg-vns-primary">
      <div className="max-w-7xl mx-auto py-4 px-4">
        <div className="sm:hidden">
          <Marquee speed={35} gradient={false} pauseOnHover>
            <div className="flex items-center gap-6 pr-6">
              {trustStrip.map((item, i) => (
                <div key={i} className="flex items-center text-center shrink-0">
                  <div className="flex items-center divide-x divide-white">
                    <span className="text-white font-bold text-xs pr-2 relative whitespace-nowrap">
                      {isMounted ? (
                        <CountUp
                          end={item.value}
                          suffix={item.suffix || ""}
                          decimals={item.decimals || 0}
                          duration={2.5}
                          delay={0.1 * i}
                        />
                      ) : (
                        <span>
                          {item.value}
                          {item.suffix}
                        </span>
                      )}
                    </span>

                    <span className="pl-2 text-xs text-white whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        <div className="hidden sm:flex flex-nowrap items-center justify-between gap-3 lg:gap-10">
          {trustStrip.map((item, i) => (
            <div
              key={i}
              className="flex-1 min-w-0 flex justify-center items-center text-center lg:text-left"
            >
              <div className="flex items-center divide-x divide-white">
                {/* Static fallback value */}

                {/* Counter with static fallback */}
                <span className="text-white font-bold text-[10px] lg:text-xl pr-2 relative whitespace-nowrap">
                  {isMounted ? (
                    <CountUp
                      end={item.value}
                      suffix={item.suffix || ""}
                      decimals={item.decimals || 0}
                      duration={2.5}
                      delay={0.1 * i}
                    />
                  ) : (
                    <span>
                      {item.value}
                      {item.suffix}
                    </span>
                  )}
                </span>

                <span className="pl-2 text-[10px] lg:text-base text-white whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustStrip
