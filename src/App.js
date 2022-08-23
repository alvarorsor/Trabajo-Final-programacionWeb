import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import BuscarMascota from "./components/BuscarMascota"
import RegistrarMascota from "./components/RegistrarMascota"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {    
  return (
      <div>
         <Navbar />
          
          <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/BuscarMascota" element={<BuscarMascota/>} />
              <Route path="/RegistrarMascota" element={<RegistrarMascota/>} />  
          </Routes>

          <Footer />
      </div>
  )
}

export default App