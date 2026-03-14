import React from "react"

const Button = ({ isPrimary = true, children, className = "" }) => {
  const baseClasses =
    "px-6 py-2 rounded-xl font-semibold text-lg cursor-pointer hover:scale-98 hover:drop-shadow-lg transition duration-300 tracking-wide"
  const variantClasses = isPrimary
    ? "bg-vns-primary text-white border-2 border-vns-primary"
    : "bg-vns-bg text-vns-secondary border-2 border-vns-secondary"

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  )
}

export default Button
