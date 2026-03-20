import Image from "next/image"
import { mood } from "@/lib/data"

const TravelByMood = () => {
  return (
    <div className="pb-12">
      <div className="max-w-5xl mx-auto w-full text-center px-4 sm:px-6 lg:px-0">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-vns-primary mb-4 sm:mb-5 font-pacifico">
          Travel by Mood
        </h2>

        <p className="text-black text-base sm:text-lg">
          Find Destinations Matching Your Interests and Mood
        </p>

        <ul className="flex gap-4 mt-8 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:overflow-visible no-scrollbar">
          {mood.map((item, i) => (
            <li
              key={i}
              className="relative min-w-65 sm:min-w-0 rounded-xl overflow-hidden lg:shadow-xl group cursor-pointer shrink-0"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={500}
                className="w-full h-72 sm:h-96 lg:h-105 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-vns-secondary/40 mix-blend-multiply" />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-4 sm:p-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-1 sm:mb-2 drop-shadow-lg">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm sm:text-lg">{item.city}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TravelByMood
