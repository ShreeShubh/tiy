import Image from "next/image"
import { footerLink } from "../../lib/data"
import Link from "next/link"
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6"
// bg-[#441206]

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white mt-auto">
      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 px-6 py-7">
        {/* LOGO + CONTACT */}
        <div className="space-y-4 col-span-2">
          {/* <Image
            src="/logo/logo.png"
            width={150}
            height={150}
            alt="Travel It Yourself"
            className=""
          /> */}
          <p className="font-pacifico text-white text-4xl mb-10 underline underline-offset-4 decoration-white">
            Travel It Yourself
          </p>

          <h3 className="text-lg font-bold tracking-widest uppercase">
            Natural • Auspicious • Pride
          </h3>

          <div className="space-y-1 text-sm">
            <p className="font-semibold text-white">Contact Us</p>
            <p>India: +91 80002 12233</p>
            <p>Email: travelityourself@gmail.com</p>
          </div>
        </div>

        {/* FOOTER SECTIONS */}
        {footerLink.map((section, index) => (
          <div key={index}>
            <p className="text-lg font-bold tracking-wider text-white mb-3 pt-7">
              {section.label}
            </p>

            <ul className="space-y-2">
              {(section.children?.length
                ? section.children
                : [{ label: section.label, link: section.link }]
              ).map((child, i) => (
                <li key={i}>
                  <Link
                    href={child.link || "#"}
                    className="hover:text-amber-400 cursor-pointer transition text-sm"
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* SOCIAL + NEWSLETTER */}
      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-6">
          {/* SOCIAL ICONS */}
          <div className="flex flex-col space-y-4">
            <p className="font-semibold text-white">Follow us</p>
            <div className="flex items-center gap-5 text-xl">
              <FaFacebookF className="hover:text-amber-400 cursor-pointer" />
              <FaXTwitter className="hover:text-amber-400 cursor-pointer" />
              <FaInstagram className="hover:text-amber-400 cursor-pointer" />
              <FaYoutube className="hover:text-amber-400 cursor-pointer" />
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="flex flex-col space-y-4">
            <p className="font-semibold text-white">Join our newsletter</p>

            <div className="flex w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white border border-white text-black px-8 py-2 rounded-l-md focus:outline-none"
              />
              <button className="bg-amber-400 text-black px-6 py-2 rounded-r-md font-semibold hover:bg-amber-300 transition whitespace-nowrap">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6 py-4 text-sm text-gray-200 gap-3">
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white">
              Terms and Conditions
            </Link>
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact Information
            </Link>
          </div>

          <p>© 2025 KaramUniko. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
