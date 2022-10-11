import React from "react"
import Card from "./Card"
import data from "./data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const searchIcon =  <FontAwesomeIcon icon={faSearch} />
let cards = {}


function btn_buscar_mascota(){
    
    cards = data.filter(function(item) {
        if(item.especie=="Gato"){
        return (
           
            <Card
            id={item.id}
        imagen={item.foto1}
        nombre={item.nombre}
        raza={item.raza}  
        fecha={item.fecha}
        observaciones={item.observaciones}
               
            />
        );
    }
     
  })

  cards.map(function(card) {
   
    return (
        document.getElementById("cards-list").innerHTML = {card}
    );

 
})
  
  
  console.log(cards)
  
}

    
    



function BuscarMascota() {
    

     cards = data.map(item => {
       
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
       
        <div class="buscar--mascota">
{/*
        <p align="center">Utiliza uno o varios campos del filtro de búsqueda para encontar a tu mascota.</p>
         
        <div class="busqueda--mascota--campos">


        <select class="select--buscar--especie"
                id="especie"  
                name="especie"  
            >
                <option value="">Especie</option>
                <option value="gato">Gato</option>
                <option value="perro">Perro</option>
                
            </select>


            <select class="select--buscar--especie"
                id="sexo" 
                name="sexo"
                
            >
                <option value="">Sexo</option>
                <option value="macho">Macho</option>
                <option value="hembra">Hembra</option>
                
            </select>

            <input class="input--especie"
                type="text"
                placeholder="UBICACION"
                name="ubicacion"
                required
            />


        <input class="input--especie" type="date" id="fecha" name="fecha" 
                       

        min="2000-01-01" max="2022-12-31" 
        
        />
       
        <button class="btn--buscar--mascota" onClick={btn_buscar_mascota}>{searchIcon} BUSCAR</button>
        </div>
*/}

            <section className="cards-list cards-list-flex" id="cards-list">
        
           {cards}
          
            
            </section>

            <div id="cards--render"></div>
        

        </div>

    
    )
}



export default BuscarMascota