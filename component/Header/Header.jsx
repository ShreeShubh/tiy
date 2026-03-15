import Image from "next/image"
import React from "react"
import Button from "../Button/Button"
import { navMenu } from "@/lib/navMenu"
import Link from "next/link"

const Header = () => {
  return (
    <nav className="z-50 fixed top-0 left-0 right-0 max-w-6xl mx-auto mt-6 flex items-center justify-between px-6 py-3 bg-vns-primary rounded-full shadow">
      <Link href="/" className="font-semibold font-pacifico text-xl text-white">
        tiY
      </Link>

      <ul className="flex gap-6 text-vns-bg text-lg font-medium">
        {navMenu.map((item) => (
          <li key={item} className="relative cursor-pointer group">
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-vns-bg group-hover:animate-underline"></span>
          </li>
        ))}
      </ul>

      <Button isPrimary={false} className="rounded-full!">
        Get Started
      </Button>
    </nav>
  )
}

export default Header
