import React from "react"

const Todo = () => {
  const [text, setText] = React.useState("")
  const [todos, setTodos] = React.useState([])

  const onClickHandler = () => {
    setTodos((todos) => [...todos, text])
  }

  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <h2>Todo</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          id="login"
          placeholder="todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ padding: "10px", margin: "20px 0" }}
        />
        <button onClick={onClickHandler} style={{ padding: "5px" }}>
          Add
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {todos.length === 0 && <p>No todos added</p>}
        {todos.map((todo, idx) => (
          <p key={idx}>{todo}</p>
        ))}
      </div>
    </div>
  )
}

export default Todo
