"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"
import Button from "../Button/Button"
import { navMenu } from "@/lib/navMenu"
import Link from "next/link"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`z-50 fixed top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled ? "bg-[#441206] shadow-lg py-3" : "mt-6"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between px-6 transition-all duration-100 ${
          isScrolled
            ? "w-full"
            : "bg-white/10 backdrop-blur-xs rounded-full shadow-lg border border-white/20 py-3"
        }`}
      >
        <Link
          href="/"
          className="font-semibold font-pacifico text-xl text-white"
        >
          TIY
        </Link>

        <ul className="flex gap-6 text-white text-lg font-medium">
          {navMenu.map((item) => (
            <li key={item} className="relative cursor-pointer group">
              {item}
              <span
                className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                  isScrolled ? "bg-white" : "bg-white"
                } group-hover:animate-underline`}
              ></span>
            </li>
          ))}
        </ul>

        <Button
          isPrimary={false}
          className={`rounded-full! ${
            isScrolled
              ? "bg-white/20 text-white border-white/30 hover:bg-white/30"
              : "bg-white/10 text-white border-white/20 hover:bg-white/20"
          }`}
        >
          Get Started
        </Button>
      </div>
    </nav>
  )
}

export default Header
