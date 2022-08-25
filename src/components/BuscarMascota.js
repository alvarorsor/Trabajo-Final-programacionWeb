import React from "react"
import Card from "./Card"
import data from "./data"


function BuscarMascota() {
    

    const cards = data.map(item => {
       
    return (
        <Card
            key={item.id}
            imagen={item.foto1}
            nombre={item.nombre}
            sexo={item.sexo}
            raza={item.raza}
            años={item.años}
            meses={item.meses}
        />
    )
})        
    
    
    return (
        <div>

        <div class="busqueda--mascota--campos">

        <p>Nombre</p>
        <input type="text" ></input>
        <p>Sexo</p>
        <select name="select">
        <option value="value1">Macho</option>
        <option value="value2">Hembra</option>
        </select>
        <p>Especie</p>
        <select name="select">
        <option value="value1">Perros</option>
        <option value="value2">Gatos</option>
        </select>
        <p>Raza</p>
        <input type="text" ></input>
       <br></br>
        <label for="start">Fecha </label>

        <input type="date" id="start" name="trip-start"

        min="2000-01-01" max="2022-12-31" />

        <button>BUSCAR</button>
        </div>


            <section className="cards-list">
                {cards}
            </section>
        

        </div>


    )
}

export default BuscarMascota