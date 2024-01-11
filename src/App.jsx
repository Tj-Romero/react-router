
import { Routes, Route, NavLink } from "react-router-dom"
import './App.css'
import Red from './components/Red'
import Blue from './components/Blue'
import About from './components/About'
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <div>
      <nav>
      <NavLink to="/blue" activeClassName="active">Blue</NavLink>
      <NavLink to="/red" activeClassName="active">Red</NavLink>
      <NavLink to="/about" activeClassName="active">About</NavLink>
      <Footer className="footer"></Footer>
      </nav>
    </div>
      <Routes>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/about" element={<About />} />
        <Route path="/footer" element={<Footer/>} />
      </Routes>
    </>
  )
}
export default App;