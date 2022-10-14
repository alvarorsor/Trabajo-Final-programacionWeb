/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import {useParams} from "react-router-dom"
import data from "./data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
import { useEffect, useState } from 'react';
import buscarMascota from '../views/BuscarMascota'


const phoneIcon = <FontAwesomeIcon icon={faPhone} />
const userIcon = <FontAwesomeIcon icon={faUser} />
const mailIcon = <FontAwesomeIcon icon={faEnvelope} />


//convertir ruta de imagen para utilizar en react
function importAll(r) {

        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      
      const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
      
      //<img src={images['lili.png']} />




function DetallesMascota(props){

    const {serviceId} = useParams()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
   
   //const thisService = data.find(service => service.id === serviceId)

     //=  props.datos.find(service => service.id === serviceId)
    
     const thisService = props.datos.find(mascota => 
       mascota.id == serviceId)
        

       
        
        
    return (
        
        <><div>
         <Link aria-current="page" class="rutas" to="/BuscarMascota">VOLVER</Link>
         </div>
        
        <div class="detalles--mascota">

             <div class="campos--izquierda--derecha">

                    <div class="campos-izquierda">

                        <div class="campos">

                            <label>Especie</label>
                            <br />
                            <label>Raza</label>
                            <br />
                            <label>Sexo</label>
                            <br />
                            <label>Años</label>
                            <br />
                            <label>Meses</label>
                            <br />
                            <label>Chip</label>
                            <br />
                            <label>Placa</label>
                            <br />
                            <label>Cola</label>
                            <br />
                            <label>Orejas</label>
                            <br />
                            <label>Color</label>
                            <br />
                            <label>Manchas</label>
                            <br />
                            <label>Fecha</label>
                            <br />
                            <label>Observaciones</label>
                            <br />

                        </div>

                       
                       
                        <div class="campos-datos">


                            <label>{thisService.attributes.especie}</label>
                            <br />
                            <label>{thisService.attributes.raza}</label>
                            <br />
                            <label>{thisService.attributes.sexo}</label>
                            <br />
                            <label>{thisService.attributes.años}</label>
                            <br />
                            <label>{thisService.attributes.meses}</label>
                            <br />
                            <label>{thisService.attributes.chip}</label>
                            <br />
                            <label>{thisService.attributes.placa}</label>
                            <br />
                            <label>{thisService.attributes.cola}</label>
                            <br />
                            <label>{thisService.attributes.orejas}</label>
                            <br />
                            <label>{thisService.attributes.color}</label>
                            <br />
                            <label>{thisService.attributes.manchas}</label>
                            <br />
                            <label>{thisService.attributes.fecha}</label>
                            <br />
                            <label class="observaciones">{thisService.attributes.observaciones}</label>


                        </div>

                    </div>{/*cierra campos-izquierda*/}



                    <div class="campos-derecha">

                        <h1 class="detalles--mascota--nombre">{thisService.attributes.nombre}</h1>
                        <br />
                        <img src={images[thisService.attributes.foto1]} class="detalles--mascota--imagen" />

                    </div>{/*cierra campos-derecha*/}



                </div>{/*cierra campos-izquierda-derecha*/}


                <h3 id="datos-de-contacto">DATOS DE CONTACTO</h3>

                <div class="datos-contacto-dueño">

                    <div class="box_dueño_nombre">
                        <p id="box_dueño-user">{userIcon}</p>
                        <p id="box_dueño-nombre-1">DUEÑO</p>
                        <p id="box_dueño-nombre">{thisService.attributes.nombreDuenio}</p>
                    </div>


                    <div class="box_dueño_telefono">
                        <p id="box_dueño-user">{phoneIcon}</p>
                        <p id="box_dueño-nombre-1">TELEFONO</p>
                        <p id="box_dueño-nombre">{thisService.attributes.telefonoDuenio}</p>
                    </div>

                    <div class="box_dueño_correo">
                        <p id="box_dueño-user">{mailIcon}</p>
                        <p id="box_dueño-nombre-1">CORREO</p>
                        <p id="box_dueño-nombre">{thisService.attributes.mailDuenio}</p>
                    </div>

                </div>{/*cierra datos-contacto-dueño*/}

            </div></>

    )
}

export default DetallesMascota