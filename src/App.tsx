import './static/fonts/font.css'
import './styles/reset.css'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Article from "./pages/Article"
import Write from "./pages/Write"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
