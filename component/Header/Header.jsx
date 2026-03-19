"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"
import Button from "../Button/Button"
import { navMenu } from "@/lib/navMenu"
import Link from "next/link"
import { FiMenu, FiX } from "react-icons/fi"

// bg-[#441206]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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
      className={`z-50 fixed top-0 left-0 right-0 transition-all duration-300 px-4 sm:px-6 lg:px-0 ${
        isScrolled ? "bg-vns-primary shadow-lg py-3" : "mt-4 sm:mt-6"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 transition-all duration-300 ${
          isScrolled
            ? "w-full"
            : "bg-white/10 backdrop-blur-md rounded-full shadow-lg border border-white/20 py-3"
        }`}
      >
        <Link
          href="/"
          className="font-semibold font-pacifico text-lg sm:text-xl text-white"
        >
          TIY
        </Link>

        <ul className="hidden md:flex gap-6 text-white text-lg font-medium">
          {navMenu.map((item) => (
            <li key={item} className="relative cursor-pointer group">
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* DESKTOP BUTTON */}
        <div className="hidden md:block">
          <Button
            isPrimary={false}
            className={`rounded-full ${
              isScrolled
                ? "bg-white/20 text-white border border-white/30 hover:bg-white/30"
                : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
            }`}
          >
            Get Started
          </Button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mt-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-5 flex flex-col gap-4 text-white">
          {navMenu.map((item) => (
            <p key={item} className="cursor-pointer">
              {item}
            </p>
          ))}

          <Button
            isPrimary={false}
            className="mt-2 bg-white/20 text-white border border-white/30"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Header
