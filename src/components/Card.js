

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
    raza={props.raza}  
    fecha={props.fecha}
    observaciones={props.observaciones}
/>
   
    return (
       
      
        <div class="col-lg-4 col-md-12 text-center mascota-list-item">
           
            {/*NOMBRE MASCOTA*/}
            <h5 class="sub-header">{props.nombre}</h5>
            
            {/*team member*/}
   
   <div class="team-wrap">
     <div class="member text-center">
         <div class="wrap">
         {/* Info */}
             <div class="info">
             {/* RAZA MASCOTA*/}
             <h3 class="name">{props.raza}</h3>
             {/* Encontrado el día */}
                                 <h4 class="position">Perdido el día {props.fecha}</h4>
                         </div>
                         { /* 14/07/2017 /info/*}
         
         {/* IMAGEN DESTACADA 1*/}
             <img src={images[props.imagen]} alt="" class="img-circle img-responsive"/>                           
         </div>
         {/* /wrap */}
         <div class="more">
         {/* OBSERVACIONES */}
             <p>{props.observaciones}</p>
          {/* DETALLES */}
          <Link class="btn--buscar--mascota" to={`/DetallesMascota/${props.id}`}>Ver detalles</Link> 
              </div>
              {/* /more  */}
          </div>
          { /* / member  */}
      </div>
            




           {/* <img src={images[props.imagen]} className="card--image" />

           
            <p>Sexo: {props.sexo}</p>
            <p>Raza: {props.raza}</p>
            <p>Años: {props.años}</p>
            <p>Meses: {props.meses}</p>

            <a class="btn--buscar--mascota" href="https://huellitasperdidas.org/mascotas/draki/">Ver Detalles</a>
          
            
           */}
       
       
        </div>
    )
}

//<Link to="/DetallesMascota" class="nav-link">DETALLES MASCOTA</Link>
//<button id={`btn_detalles_mascota_ID${props.id}`} onClick={`verDetallesMascota(${props.id})`}>Ver detalles</button>
/*
<Routes>
<Route exact path="/DetallesMascota" element={<DetallesMascota/>} />
 </Routes>*/