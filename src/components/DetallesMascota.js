import React from "react"
import {useParams} from "react-router-dom"
import data from "./data"

function DetallesMascota(props) {
   
    const {serviceId} = useParams()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const thisService = data.find(service => service.id === serviceId)
   
   
   
    return (
        <div class="detalles--mascota">

        

        <label>Nombre</label>
        <label class="box_label">{thisService.nombre}</label>
        <br/>
        <label>Raza</label>
        <label class="box_label">{thisService.raza}</label>
        <br/>
         <label>Sexo</label>
         <label class="box_label">{thisService.sexo}</label>
        <br/>
        <label>Años</label>
        <label class="box_label">{thisService.años}</label>
        <br/>
        <label>Chip</label>
        <label class="box_label">{thisService.chip}</label>
        <br/>
        <label>Orejas</label>
        <label class="box_label">{thisService.orejas}</label>
        <br/>
        <label>Color</label>
        <label class="box_label">{thisService.color}</label>
        <br/>
        <label>Observaciones</label><br />
        <label class="box_label">{thisService.observaciones}</label>
        <br/>
        <label>Nombre dueño</label>
        <label class="box_label">{thisService.nombreDueño}</label>
        <br/>
        <label>Telefono dueño</label>
        <label class="box_label">{thisService.telefonoDueño}</label>
        <br/>
        <label>Correo dueño</label>
        <label class="box_label">{thisService.mailDueño}</label>




        </div>
    )
}

export default DetallesMascota