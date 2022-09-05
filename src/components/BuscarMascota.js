import React from "react"
import Card from "./Card"
import data from "./data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope, faEnvelopeOpen, faHouse, faList, faPhone, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

const searchIcon =  <FontAwesomeIcon icon={faSearch} />

function BuscarMascota() {
    

    const cards = data.map(item => {
       
    return (
        <Card
        id={item.id}
    imagen={item.foto1}
    nombre={item.nombre}
    raza={item.raza}  
    fecha={item.fecha}
    observaciones={item.observaciones}
           
        />
    )
})        

/*function verDetallesMascota(id){

    const detallesMascota = data.map(function(item){
        if(item.id == id){
            <DetallesMascota
            id={item.id}
            imagen={item.foto1}
            nombre={item.nombre}
            sexo={item.sexo}
            raza={item.raza}
            años={item.años}
            meses={item.meses}
        />
        }
    })
      
    return
   {detallesMascota}

    }   

*/
   

    
    
    return (
        <div>

        <p>Utiliza uno o varios campos del filtro de búsqueda para encontar a tu mascota.</p>
        
        <div class="busqueda--mascota--campos">


        <select class="select--buscar--especie"
                id="especie"  
                name="especie"  
            >
                <option value="">Especie</option>
                <option value="gato">Gato</option>
                <option value="perro">Perro</option>
                
            </select>


            <select 
                id="sexo" 
                name="sexo"
                
            >
                <option value="">Sexo</option>
                <option value="macho">Macho</option>
                <option value="hembra">Hembra</option>
                
            </select>

            <input
                type="text"
                placeholder="Raza"
                name="raza"
                required
            />


        <input type="date" id="fecha" name="fecha" 
                       

        min="2000-01-01" max="2022-12-31" 
        
        />
       
        <button class="btn--buscar--mascota">{searchIcon} BUSCAR</button>
        </div>


            <section className="cards-list">
        
           {cards}
            
            </section>
        

        </div>


    )
}



export default BuscarMascota