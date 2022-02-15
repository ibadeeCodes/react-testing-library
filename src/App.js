// function App() {
//   return (
//     <div>
//       <Fetch url="/greeting" />
//       <ClickCounter />
//     </div>
//   )
// }

// export default App

import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./App.css"
// import ClickCounter from "./components/click-counter"
// import Fetch from "./components/fetch"
import Login from "./components/login"
import Todo from "./components/todo"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="todo" element={<Todo />} />
      </Routes>
    </Router>
  )
}
