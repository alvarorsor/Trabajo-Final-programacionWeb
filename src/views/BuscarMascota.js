import React from "react"
import Card from "../components/Card"
//import data from "../components/data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
//import useFetch from "../hooks/useFetch"
import { useEffect, useState } from 'react';
import DetallesMascota from "../components/DetallesMascota";



const searchIcon =  <FontAwesomeIcon icon={faSearch} />
let cards = {}





function BuscarMascota(props) {

 
  const [formData, setFormData] = React.useState(
    {
      

        nombre: '',
        
        raza: '',
        fecha: '',
        
    
        }
)

function handleChange(event) {
  const {name, value, type, checked} = event.target
  setFormData(prevFormData =>{
      return {
         
          ...prevFormData,
      
          [name]: type === "checkbox" ? checked : value
      
  
  }
  })
  
}


function handleSubmit(event) {

  
  event.preventDefault()
  // submitToApi(formData)
  console.log(formData.fecha)

  

}




cards = props.datos.map(item =>  <Card
    id={item.id}
imagen={item.attributes.foto1}
nombre={item.attributes.nombre}
raza={item.attributes.raza}  
fecha={item.attributes.fecha}
observaciones={item.attributes.observaciones}
    
/>)


//

//console.log(cards_filter)
if(formData.nombre!=""){
cards = cards.filter(card => card.props.nombre==formData.nombre)

}

if(formData.raza!=""){
  cards = cards.filter(card => card.props.raza==formData.raza)
  
  }

  if(formData.fecha!=""){
    cards = cards.filter(card => card.props.fecha==formData.fecha)
    
    }
console.log(formData.fecha)


  //cards  = cards.filter(card => card.props.nombre=="telma")
  
  


  return(
       

<div class="buscar--mascota">

<p>Utiliza uno o varios campos del filtro de búsqueda para encontar a tu mascota.</p>

<form onSubmit={handleSubmit} class="filtro-cards">

                    <input
                    type="text"
                    placeholder="Nombre"
                    onChange={handleChange}
                    name="nombre"
                    value={formData.nombre}
                     />
                <input
                type="text"
                placeholder="Raza"
                onChange={handleChange}
                name="raza"
                value={formData.raza}
                
            />
                

                <input type="date" id="fecha" name="fecha" value={formData.fecha}
                        onChange={handleChange}

                min="2000-01-01" max="2022-12-31" 
                
                />
                
               


</form>


            <section className="cards-list cards-list-flex" id="cards-list">
                    
          {cards}
                   
            </section>
        <div id="cards--render"></div>

       
        
</div>

    )
}

export default BuscarMascota