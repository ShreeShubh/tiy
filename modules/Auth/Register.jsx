import React from "react"
import { Email, Name, Password } from "@/component/Inputs/Inputs"
import Link from "next/link"
import Button from "@/component/Button/Button"

const Register = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-5 bg-white flex flex-col gap-5 w-96">
        <p className="text-2xl font-semibold text-center">
          Create your account
        </p>
        <Name />
        <Email />
        <Password />
        <Button>Sign Up</Button>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-vns-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
