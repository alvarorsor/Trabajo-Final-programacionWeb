import React from "react"
import {useParams} from "react-router-dom"
import data from "./data"

function DetallesMascota(props) {
   
    const {serviceId} = useParams()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const thisService = data.find(service => service.id === serviceId)
   
   
   
    return (
        <div>

        <h1>DETALLES MASCOTA</h1>

        <label>Nombre {thisService.nombre}</label>
        <br/>
        <label>Raza {thisService.raza}</label>
        <br/>
         <label>Sexo {thisService.sexo}</label>
        <br/>
        <label>Años {thisService.años}</label>
        <br/>
        <label>chip</label>
        <br/>
        <label>orejas</label>
        <br/>
        <label>color</label>
        <br/>
        <label>observaciones</label>
        <br/>
        <label>Nombre dueño</label>
        <br/>
        <label>Telefono dueño</label>
        <br/>
        <label>Correo dueño</label>




        </div>
    )
}

export default DetallesMascota