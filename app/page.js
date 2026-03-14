import Header from "../component/Header/Header"
import Button from "../component/Button/Button"

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center gap-5">
        <h1 className="text-7xl text-vns-primary font-sans">
          Whereas recognition
        </h1>
        <div className="flex gap-3">
          <Button children="Primary Button" />
          <Button isPrimary={false} children="Secondary Button" />
        </div>
      </div>
    </>
  )
}
