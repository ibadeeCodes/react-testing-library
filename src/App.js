import "./App.css"
import ClickCounter from "./components/click-counter"
import Fetch from "./components/fetch"

function App() {
  return (
    <div>
      <Fetch url="/greeting" />
      <ClickCounter />
    </div>
  )
}

export default App
