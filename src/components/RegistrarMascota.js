import React from "react"

function RegistrarMascota() {
    return (
        <div class="registrarMascotaCampos">

        <div class="seccion--izquierda">
        <h1>DATOS MASCOTA</h1>
        <p>Los campos marcados con asterisco* son obligatorios.</p>
        <p>Nombre*</p>
        <input type="text" ></input>
        <p>Color</p>
        <input type="text" ></input>

       

        <p>Sexo*</p>
        <select name="select">
        <option value="value1">Macho</option>
        <option value="value2">Hembra</option>
        </select>
        <p>Raza*</p>
        <input type="text" ></input>
        <p>Años*</p>
        <select name="select"> 
        <option value="value1">0</option>
        <option value="value1">1</option>
        <option value="value2">2</option>
        <option value="value2">3</option>
        <option value="value2">4</option>
        <option value="value2">5</option>
        <option value="value2">6</option>
        <option value="value2">7</option>
        <option value="value2">8</option>
        <option value="value2">9</option>
        <option value="value2">10</option>
        <option value="value2">11</option>
        <option value="value2">12</option>
        <option value="value1">13</option>
        <option value="value1">14</option>
        <option value="value2">15</option>
        <option value="value2">16</option>
        <option value="value2">17</option>
        <option value="value2">18</option>
        <option value="value2">19</option>
        <option value="value2">20</option>
        <option value="value2">21</option>
        <option value="value2">22</option>
        <option value="value2">23</option>
        <option value="value2">24</option>
        <option value="value2">25</option>
        </select>
        <p>Meses*</p>

        <select name="select"> 
        <option value="value1">0</option>
        <option value="value1">1</option>
        <option value="value2">2</option>
        <option value="value2">3</option>
        <option value="value2">4</option>
        <option value="value2">5</option>
        <option value="value2">6</option>
        <option value="value2">7</option>
        <option value="value2">8</option>
        <option value="value2">9</option>
        <option value="value2">10</option>
        <option value="value2">11</option>
        <option value="value2">12</option>
        </select>


        <p>Chip</p>
        <input type="text" ></input>
        <p>Orejas</p>
        <input type="text" ></input>

        <p>Observaciones</p>
        <input type="text" class="observaciones--campo"></input>

       

       
        
        </div>

        <div class="seccion--derecha">
        <h3>FOTOS</h3>
        <p>Foto 1*</p>
        
        <label for="img">Select image:</label>
        <input type="file" id="img" name="img" accept="image/*" />
        
        
        <p>Foto 2</p>
        <label for="img">Select image:</label>
        <input type="file" id="img" name="img" accept="image/*" />
        <p>Foto 3</p>
        <label for="img">Select image:</label>
        <input type="file" id="img" name="img" accept="image/*" />

        <p>¿Cuándo fue encontrado / perdido / puesto en adopción? *</p>
        <label for="start">Fecha </label>

        <input type="date" id="start" name="trip-start"
      
       min="2000-01-01" max="2022-12-31" />
        
        <p>Nombre persona*</p>
        <input type="text" ></input>
        <p>Telefono*</p>
        <input type="text" ></input>
        <p>Mail*</p>
        <input type="text" ></input>
        
        
        </div>
        </div>
        
    )
}

export default RegistrarMascota