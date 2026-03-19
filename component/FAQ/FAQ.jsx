"use client"

import React from "react"
import { faqs } from "../../lib/data"
import { IoIosArrowDown } from "react-icons/io"

const FAQ = () => {
  const [activeIndex, setActiveIndex] = React.useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="pt-10 sm:pt-12 pb-16 sm:pb-20">
      <div className="max-w-3xl mx-auto w-full text-center px-4 sm:px-6 lg:px-0">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-vns-primary mb-4 sm:mb-5 font-pacifico">
          Frequently Asked Questions
        </h2>

        <p className="text-black text-base sm:text-lg">
          Find answers to your most common questions about our services and
          products.
        </p>

        <ul className="flex flex-col gap-3 sm:gap-4 mt-6 sm:mt-8">
          {faqs.map((faq, i) => (
            <li key={i} className="text-left group">
              {/* HEADER */}
              <div
                onClick={() => toggleFAQ(i)}
                className={`flex justify-between items-center cursor-pointer bg-white px-4 sm:px-5 py-4 sm:py-5 border border-gray-200 transition-all duration-300
            ${
              activeIndex === i
                ? "rounded-t-xl shadow-md"
                : "rounded-xl hover:shadow-md"
            }`}
              >
                <p className="text-sm sm:text-base font-medium text-gray-800">
                  {faq.question}
                </p>

                <IoIosArrowDown
                  size={20}
                  className={`transform transition-transform duration-300 ${
                    activeIndex === i ? "rotate-180 text-vns-primary" : ""
                  }`}
                />
              </div>

              {/* BODY */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="bg-white px-4 sm:px-5 py-4 sm:py-5 rounded-b-xl shadow-md border-x border-b border-gray-200">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>

                    {faq.list && (
                      <ul className="list-disc list-inside mt-3 text-gray-700 text-sm sm:text-base space-y-1">
                        {faq.list.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FAQ
