import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BuscarMascota from "./views/BuscarMascota"
import RegistrarMascota from "./views/RegistrarMascota"
import DetallesMascota from "./components/DetallesMascota"
import Navbar from "./components/Navbar"
import Home from "./views/Home"
import Footer from "./components/Footer"
import { useEffect, useState } from 'react';



// Parses the JSON returned by a network request
const parseJSON = (resp) => (resp.json ? resp.json() : resp);

// Checks if a network request came back fine, and throws an error if not
const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }

  return parseJSON(resp).then(resp => {
    throw resp;
  });
};

const headers = { 'Content-Type': 'application/json' };


function App() {    

    const [error, setError] = useState(null);
    const [mascotas, setMascotas] = useState([]);
  

    //GET
    useEffect(() => {
      fetch('http://localhost:1337/api/mascotas', { headers, method: 'GET' })
        .then(checkStatus)
        .then(parseJSON)
        .then(({ data }) => setMascotas(data))
        .catch((error) => setError(error))
    }, [])
  
    if (error) {
      // Print errors if any
      return <div>An error occured: {error.message}</div>;
    }


       
    
           // data.push(formData)



  return (
      <div>
         <Navbar />
          
          <Routes>

              <Route exact path="/" element={<Home/>} />
              <Route path="/BuscarMascota" element={<BuscarMascota datos={mascotas}/>} />
              <Route path="/RegistrarMascota" element={<RegistrarMascota/>} />  
              <Route path="/DetallesMascota/:serviceId" element={<DetallesMascota datos={mascotas}/>} />
                           
          </Routes>

          <Footer />
      </div>
  )
}

export default App