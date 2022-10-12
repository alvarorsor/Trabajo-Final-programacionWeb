import React from 'react';
import {Link} from "react-router-dom"


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
  
 // <img src={images['lili.png']} />

export default function Card(props) {
   
    
   
    return (
<div class="text-center mascota-list-item">

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
                {/* IMAGEN DESTACADA 1*/}
                <img src={images[props.imagen]} alt="" class="img-circle img-responsive"/>                           
            </div>
                 {/* /wrap */}
                <div class="more">
                    {/* OBSERVACIONES */}
                    <p>{props.observaciones}</p>
                    {/* DETALLES */}
                    <Link class="btn--buscar--mascota" to={`/DetallesMascota/${props.id}`}>Ver detalles</Link> 
                </div>{/* /more  */}
        
          </div> { /* / member  */}
     </div>
            
</div>
    )
}

