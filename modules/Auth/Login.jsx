"use client"

import React, { useRef, useState } from "react"
//import { Password } from "@/component/Inputs/Inputs"
import Button from "@/component/Button/Button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Email } from "@/component/Inputs/Email"
import { Password } from "@/component/Inputs/Password"

const Login = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Refs to access validation methods from child components
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Trigger validation in child components
    const isEmailValid = emailRef.current?.validate()
    const isPasswordValid = passwordRef.current?.validate()

    if (!isEmailValid || !isPasswordValid) {
      return // Stop submission if validation fails
    }

    setIsSubmitting(true)

    try {
      console.log("Logging in with:", formData)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Clear form
      setFormData({
        email: "",
        password: "",
      })

      // Redirect to home page
      router.push("/")
    } catch (error) {
      console.error("Login failed:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="p-5 bg-white flex flex-col gap-3 w-96"
      >
        <p className="text-2xl font-semibold text-center">
          Login to your account
        </p>

        <Email ref={emailRef} value={formData.email} onChange={handleChange} />
        <Password
          ref={passwordRef}
          value={formData.password}
          onChange={handleChange}
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>

        <p className="text-sm text-center">
          Don't have an account?{" "}
          <Link href="/register" className="text-vns-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
