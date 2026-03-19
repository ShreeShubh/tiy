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
    <div className="bg-vns-primary text-white mt-auto">
      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-4 py-7">
        {/* LOGO + CONTACT */}
        <div className="space-y-4 col-span-2">
          <p className="font-pacifico text-white text-3xl sm:text-4xl underline underline-offset-4 decoration-white mb-4">
            Travel It Yourself
          </p>

          <h3 className="text-lg font-bold tracking-widest uppercase">
            Natural • Auspicious • Pride
          </h3>

          <div className="space-y-1 text-sm hidden lg:block">
            <p className="font-semibold text-white">Contact Us</p>
            <p>India: +91 80002 12233</p>
            <p>Email: travelityourself@gmail.com</p>
          </div>
        </div>

        {/* FOOTER SECTIONS */}
        <div className="col-span-2 lg:col-span-3 grid grid-cols-3 sm:grid-cols-3 gap-x-8 gap-y-6">
          {footerLink.map((section, index) => (
            <div key={index}>
              <p className="text-lg font-bold tracking-wider text-white mb-3 mt-6 lg:mt-0">
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
                      className="hover:text-amber-400 transition duration-200 text-sm"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* SOCIAL + NEWSLETTER */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 py-6">
          {/* SOCIAL + CONTACT (MOBILE) */}
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <div className="flex flex-col space-y-4">
              <p className="font-semibold text-white">Follow us</p>
              <div className="flex items-center gap-5 text-xl">
                <FaFacebookF className="hover:text-amber-400 cursor-pointer transition duration-200" />
                <FaXTwitter className="hover:text-amber-400 cursor-pointer transition duration-200" />
                <FaInstagram className="hover:text-amber-400 cursor-pointer transition duration-200" />
                <FaYoutube className="hover:text-amber-400 cursor-pointer transition duration-200" />
              </div>
            </div>

            <div className="space-y-1 text-sm block lg:hidden leading-relaxed">
              <p className="font-semibold text-white">Contact Us</p>
              <p>India: +91 80002 12233</p>
              <p>Email: travelityourself@gmail.com</p>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="flex flex-col space-y-4">
            <p className="font-semibold text-white">Join our newsletter</p>

            <div className="flex w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white border border-white text-black px-4 sm:px-6 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button className="bg-amber-400 text-black px-5 sm:px-6 py-2 rounded-r-md font-semibold hover:bg-amber-300 transition whitespace-nowrap">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-4 text-sm text-gray-200 gap-3">
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start">
            <Link
              href="/terms"
              className="hover:text-white transition duration-200"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/privacy"
              className="hover:text-white transition duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="hover:text-white transition duration-200"
            >
              Contact Information
            </Link>
          </div>

          <p className="text-center sm:text-right">
            © 2026 Travel It Yourself. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
