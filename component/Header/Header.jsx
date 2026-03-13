import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <nav>
      <div className="flex items-center justify-between py-5 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/short-logo01.png"
            alt="TIY Logo"
            width={75}
            height={50}
          />
          <p className="text-[#fe5009]">Travel It Yourself</p>
        </div>

        <ul className="flex space-x-6">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
