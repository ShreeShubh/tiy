import React from "react"
import { Email, Password } from "@/component/Inputs/Inputs"
import Button from "@/component/Button/Button"
import Link from "next/link"

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-5 bg-white flex flex-col gap-5 w-96">
        <p className="text-2xl font-semibold text-center">
          Login to your account
        </p>
        <Email />
        <Password />
        <Button>Login</Button>
        <p className="text-sm text-center">
          Don't have an account?{" "}
          <Link href="/register" className="text-vns-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
