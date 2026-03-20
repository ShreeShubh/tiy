import React from "react"

const Button = ({ isPrimary = true, children, className = "" }) => {
  const baseClasses =
    "px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-xl font-semibold text-sm sm:text-base md:text-lg cursor-pointer transition duration-300 tracking-wide"
  const variantClasses = isPrimary
    ? "bg-vns-primary text-white border-2 border-vns-primary hover:bg-vns-accent hover:border-vns-accent"
    : "bg-vns-bg text-vns-primary border-2 border-white hover:bg-vns-accent hover:border-vns-accent hover:text-white"

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  )
}

export default Button
