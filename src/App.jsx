import Home from "./pages/Home"
import GameOver from "./pages/GameOver"
import GameSucess from "./pages/GameSucess"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game-over" element={<GameOver />} />
        <Route path="/game-sucess" element={<GameSucess />} />
      </Routes>
    </Router>

  )
}

export default App
