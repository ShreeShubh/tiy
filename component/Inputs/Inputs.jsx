export function Name() {
  return (
    <input
      type="text"
      placeholder="Name"
      className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-vns-primary"
    />
  )
}

export function Email({ value, onChange }) {
  return (
    <input
      type="text"
      name="email"
      placeholder="Email"
      value={value}
      onChange={onChange}
      className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-vns-primary"
    />
  )
}

export function Password({ value, onChange }) {
  return (
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={value}
      onChange={onChange}
      className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-vns-primary"
    />
  )
}
