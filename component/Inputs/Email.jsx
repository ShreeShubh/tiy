"use client"

import { useState, useEffect, forwardRef, useImperativeHandle } from "react"

export const Email = forwardRef(({ value, onChange }, ref) => {
  const [validationState, setValidationState] = useState({
    isValid: true,
    message: "",
    touched: false,
  })

  const validateEmail = (email) => {
    if (!email) {
      return { isValid: false, message: "Email is required" }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { isValid: false, message: "Please enter a valid email address" }
    }

    return { isValid: true, message: "" }
  }

  // Expose validate method to parent
  useImperativeHandle(ref, () => ({
    validate: () => {
      const validation = validateEmail(value)
      setValidationState({ ...validation, touched: true })
      return validation.isValid
    },
  }))

  useEffect(() => {
    if (validationState.touched) {
      const validation = validateEmail(value)
      setValidationState((prev) => ({ ...prev, ...validation }))
    }
  }, [value, validationState.touched])

  const handleBlur = () => {
    const validation = validateEmail(value)
    setValidationState({ ...validation, touched: true })
  }

  return (
    <div className="flex flex-col gap-1">
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        className={`border-2 rounded-lg p-2 focus:outline-none focus:ring-2 transition-colors
          ${
            validationState.touched && !validationState.isValid
              ? "border-red-500 focus:ring-red-500 bg-red-50"
              : validationState.touched && validationState.isValid && value
                ? "border-green-500 focus:ring-green-500 bg-green-50"
                : "border-gray-300 focus:ring-vns-primary"
          }`}
      />
      <div className="h-5 text-sm">
        {validationState.touched && !validationState.isValid && (
          <p className="text-red-500 text-xs flex items-center gap-1">
            {validationState.message}
          </p>
        )}
      </div>
    </div>
  )
})

Email.displayName = "Email"
