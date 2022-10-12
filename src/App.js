import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BuscarMascota from "./views/BuscarMascota"
import RegistrarMascota from "./views/RegistrarMascota"
import DetallesMascota from "./components/DetallesMascota"
import Navbar from "./components/Navbar"
import Home from "./views/Home"
import Footer from "./components/Footer"


function App() {    
  return (
      <div>
         <Navbar />
          
          <Routes>

              <Route exact path="/" element={<Home/>} />
              <Route path="/BuscarMascota" element={<BuscarMascota/>} />
              <Route path="/RegistrarMascota" element={<RegistrarMascota/>} />  
              <Route path="/DetallesMascota/:serviceId" element={<DetallesMascota/>} />
                           
          </Routes>

          <Footer />
      </div>
  )
}

export default App