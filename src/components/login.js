import React from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  const onClickHandler = () => {
    if (username === "ibad" && password === "s3cret") {
      navigate("/todo")
    } else {
      alert("Invalid credentials")
      return
    }
  }

  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <h2>Log In</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          id="login"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "10px" }}
        />
        <input
          type="password"
          id="pass"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: "20px 0", padding: "10px" }}
        />
      </div>
      <button onClick={onClickHandler}>Login</button>
    </div>
  )
}

export default Login
