"use client"

import { useState, forwardRef, useImperativeHandle } from "react"

export const Password = forwardRef(({ value, onChange }, ref) => {
  const [error, setError] = useState("")
  const [touched, setTouched] = useState(false)

  const validatePassword = (password) => {
    if (!password) {
      return "Password is required"
    }
    return ""
  }

  // Expose validate method to parent
  useImperativeHandle(ref, () => ({
    validate: () => {
      const validationError = validatePassword(value)
      setError(validationError)
      setTouched(true)
      return !validationError
    },
  }))

  const handleBlur = () => {
    setTouched(true)
    setError(validatePassword(value))
  }

  const handleChange = (e) => {
    onChange(e)
    if (touched) {
      setError(validatePassword(e.target.value))
    }
  }

  return (
    <div className="flex flex-col gap-1">
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`border-2 rounded-lg p-2 focus:outline-none focus:ring-2 transition-colors
          ${
            touched && error
              ? "border-red-500 focus:ring-red-500 bg-red-50"
              : touched && !error && value
                ? "border-green-500 focus:ring-green-500 bg-green-50"
                : "border-gray-300 focus:ring-vns-primary"
          }`}
      />

      <div className="h-5 text-sm">
        {touched && error && (
          <p className="text-red-500 text-xs flex items-center gap-1">
            {error}
          </p>
        )}
      </div>
    </div>
  )
})

Password.displayName = "Password"
