import Image from "next/image"
import { mood } from "@/lib/data"

const TravelByMood = () => {
  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto w-full text-center">
        <h2 className="text-5xl text-vns-primary mb-5 font-pacifico">
          Travel by Mood
        </h2>
        <p className="text-black mb-12 text-lg">
          Find Destinations Matching Your Interests and Mood
        </p>

        <ul className="grid grid-cols-3 gap-6 mt-8">
          {mood.map((item, i) => (
            <li
              key={i}
              className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={500}
                className="w-full h-105 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-vns-secondary/40 mix-blend-multiply" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-4xl text-white mb-2 drop-shadow-lg">
                  {item.title}
                </h3>
                <p className="text-white/90 text-lg">{item.city}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TravelByMood
