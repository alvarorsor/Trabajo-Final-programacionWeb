import React from "react"
import Card from "../components/Card"
import data from "../components/data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const searchIcon =  <FontAwesomeIcon icon={faSearch} />
let cards = {}


{/*function btn_buscar_mascota(){
    
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
  
}// cierra btn_buscar_mascota
*/}
    

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


    return (
       
        <div class="buscar--mascota">


            <section className="cards-list cards-list-flex" id="cards-list">
        
           {cards}
          
            
            </section>

            <div id="cards--render"></div>
        

        </div>

    
    )
}

export default BuscarMascota