import React from "react"
import {useParams} from "react-router-dom"
import data from "./data"

import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHouse, faList, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons'


const phoneIcon = <FontAwesomeIcon icon={faPhone} />
const searchIcon = <FontAwesomeIcon icon={faSearch} />
const listhIcon = <FontAwesomeIcon icon={faList} />


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
        
        <label class="box_dueño">{phoneIcon} <br /> NOMBRE <br />{thisService.nombreDueño}</label>
        <br/>
        <label>TELEFONO</label>
        <label>{thisService.telefonoDueño}</label>
        <br/>
        <label>MAIL</label>
        <label>{thisService.mailDueño}</label>




        </div>
    )
}

export default DetallesMascota