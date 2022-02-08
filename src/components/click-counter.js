import React from "react"

const ClickCounter = () => {
  const [count, setCount] = React.useState(0)

  const onIncrement = () => {
    setCount((count) => count + 1)
  }

  const onDecrement = () => {
    // Avoid values to get negative.
    if (count === 0) {
      alert("Can not decrement further")
      return
    }
    setCount((count) => count - 1)
  }

  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <h1>{count}</h1>

      <button onClick={onDecrement}>Decrement</button>
    </div>
  )
}

export default ClickCounter
