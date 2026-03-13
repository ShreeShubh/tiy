import Image from 'next/image'
import Header from '../component/Header/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#feede6]">
      <Header />
      <div className="h-full flex items-center justify-center">
        {/* <h1 className="text-7xl text-[#fe5009] pacifico-regular">
          Welcome To TIY
        </h1> */}
      </div>
    </div>
  )
}
