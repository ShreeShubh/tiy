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
    <div className="pt-12 pb-20">
      <div className="max-w-3xl mx-auto w-full text-center">
        <h2 className="text-4xl font-bold text-vns-primary mb-5 font-pacifico">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-black">
          Find answers to your most common questions about our services and
          products.
        </p>

        <ul className="flex flex-col gap-3 mt-8">
          {faqs.map((faq, i) => (
            <li key={i} className="text-left">
              <div
                onClick={() => toggleFAQ(i)}
                className={`flex justify-between items-center cursor-pointer bg-white p-5 shadow-md border border-gray-200 transition-all duration-300 ${
                  activeIndex === i ? "rounded-t-lg" : "rounded-lg"
                }`}
              >
                <p>{faq.question}</p>
                <IoIosArrowDown
                  size={20}
                  className={`transform transition-transform duration-300 ${
                    activeIndex === i ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div
                className={`grid transition-all duration-300 ${
                  activeIndex === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="bg-white p-5 rounded-b-lg shadow-md border-b border-x border-gray-200 mt-0">
                    <p className="text-black">{faq.answer}</p>
                    {faq.highlights && (
                      <ul className="list-disc list-inside mt-3 text-black px-1">
                        {faq.highlights.map((highlight, j) => (
                          <li key={j}>{highlight}</li>
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
