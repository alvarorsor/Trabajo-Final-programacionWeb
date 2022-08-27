

import React, { Component } from 'react';
import DetallesMascota  from "./DetallesMascota"
import {Link} from "react-router-dom"



function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
  
  <img src={images['lili.png']} />

export default function Card(props) {
   
    <DetallesMascota
    id={props.id}
    imagen={props.foto1}
    nombre={props.nombre}
    sexo={props.sexo}
    raza={props.raza}
    años={props.años}
    meses={props.meses}
/>
   
    return (
       
      
        <div className="card">
            <img src={images[props.imagen]} className="card--image" />

            <p className="card--title">Nombre: {props.nombre}</p>
            <p>Sexo: {props.sexo}</p>
            <p>Raza: {props.raza}</p>
            <p>Años: {props.años}</p>
            <p>Meses: {props.meses}</p>

           
          
            <Link to={`/DetallesMascota/${props.id}`}>Detalles mascota</Link> 
           
       
       
        </div>
    )
}

//<Link to="/DetallesMascota" class="nav-link">DETALLES MASCOTA</Link>
//<button id={`btn_detalles_mascota_ID${props.id}`} onClick={`verDetallesMascota(${props.id})`}>Ver detalles</button>
/*
<Routes>
<Route exact path="/DetallesMascota" element={<DetallesMascota/>} />
 </Routes>*/