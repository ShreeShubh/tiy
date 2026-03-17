import Image from "next/image"
import { statesData } from "@/lib/data"
import Button from "../../Button/Button"
import { MdKeyboardArrowRight } from "react-icons/md"

const FeaturedStates = () => {
  return (
    <div className='py-16 bg-[url("/home/featured-states-bg.png")] bg-cover bg-center'>
      <div className="max-w-6xl mx-auto w-full text-center">
        <h2 className="text-4xl text-vns-primary mb-5 font-pacifico">
          Our Featured States
        </h2>
        <p className="text-black mb-12">
          Smart, Safe & Affordable City Guides At Your Finger Tips
        </p>

        <ul className="grid grid-cols-3 gap-6 mt-8">
          {statesData.map((item, i) => (
            <li
              key={i}
              className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.state}
                width={400}
                height={500}
                className="w-full h-105 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

              {/* Warm Orange Overlay (brand feel) */}
              <div className="absolute inset-0 bg-vns-primary/40 mix-blend-multiply" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-6">
                <h3 className="text-3xl font-semibold text-white mb-2 drop-shadow-lg">
                  {item.state}
                </h3>
                <p className="text-white/90 text-sm mb-6">{item.highlights}</p>
                <Button className="group/btn rounded-full! bg-vns-accent! border-vns-accent! hover:scale-none! hover:bg-vns-primary! hover:border-vns-primary!">
                  <div className="flex items-center gap-3">
                    Explore {item.state}
                    <span className="bg-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1">
                      <MdKeyboardArrowRight
                        size={20}
                        className="text-vns-accent "
                      />
                    </span>
                  </div>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FeaturedStates
