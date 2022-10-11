import React from "react"
import data from "./data"





function RegistrarMascota() {




    const [formData, setFormData] = React.useState(
        {
          /*  id: "",
            nombre: "", 
            color: "", 
            sexo: "", 
            raza: "", 
            años: "",
            meses: "",
            chip: "",
            orejas: "",
            observaciones: "",
            nombreDueño: "",
            telefonoDueño: "",
            mailDueño: "",
            foto1: ""*/


            id: "",
            nombre: "", 
            especie: "",
            raza: "",
            tamaño: "",
            sexo: "",
            años: "",
            meses: "",
            chip: "",
            placa: "",
            cola: "",
            orejas: "",
            color: "",
            manchas: "",
            observaciones: "",
            foto1: "",
            foto2: "",
            foto3: "",
            fecha: "",
            nombreDueño: "",
            telefonoDueño: "",
            mailDueño: ""
            }
    )

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
                
            }
        })
        
    }
    
    let id_number = (data.length + 1).toString()
    function handleSubmit(event) {


        const email = document.getElementById("mail");

        email.addEventListener("input", function (event) {
          if (email.validity.typeMismatch) {
            email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
          } else {
            email.setCustomValidity("");
          }
        });
      
        setFormData(item => item.id = id_number)

        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
       
        

        data.push(formData)
    }


    return (


<form onSubmit={handleSubmit}>

 <div class="registrarMascotaCampos">

    <div class="seccion--izquierda">
   

        <h1>DATOS MASCOTA</h1>
        <p>Los campos marcados con asterisco* son obligatorios.</p>
       
       
            <input
                    type="text"
                    placeholder="Nombre Mascota*"
                    onChange={handleChange}
                    name="nombre"
                    value={formData.nombre}
                    required />
<br/>

            
            <select 
                id="especie" 
                value={formData.especie}
                onChange={handleChange}
                name="especie"
                required
                
            >
                <option value="">Especie*</option>
                <option value="gato">Gato</option>
                <option value="perro">Perro</option>
                
            </select>
<br/><br/>

<input
                type="text"
                placeholder="Raza*"
                onChange={handleChange}
                name="raza"
                value={formData.raza}
                required
            />

<br/>      


        
            <select 
                id="tamaño" 
                value={formData.tamaño}
                onChange={handleChange}
                name="tamaño"
                required
            >
                <option value="">Tamaño*</option>
                <option value="grande">Grande</option>
                <option value="mediano">Mediano</option>
                <option value="chico">Chico</option>
                
            </select>
<br/> <br/>
       

    
        
            <select 
                id="sexo" 
                value={formData.sexo}
                onChange={handleChange}
                name="sexo"
                required
            >
                <option value="">Sexo*</option>
                <option value="macho">Macho</option>
                <option value="hembra">Hembra</option>
                
            </select>

<br />


<br />
            <select 
                id="años" 
                value={formData.años}
                onChange={handleChange}
                name="años"
                required
            >
             <option value="">Años*</option>
                 <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                
            </select>
 <br />           

          
<br />
            <select 
                id="meses" 
                value={formData.meses}
                onChange={handleChange}
                name="meses"
            >
  
             <option value="">Meses</option>
                 <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                
            </select>

            <br/>
            <br/>              
                <input
                type="text"
                placeholder="Chip"
                onChange={handleChange}
                name="chip"
                value={formData.chip}
            />
<br/>

<input
                type="text"
                placeholder="Placa"
                onChange={handleChange}
                name="placa"
                value={formData.placa}
            />
<br/>


<input
                type="text"
                placeholder="Cola"
                onChange={handleChange}
                name="cola"
                value={formData.cola}
            />

<br/>       

<input
                type="text"
                placeholder="Orejas"
                onChange={handleChange}
                name="orejas"
                value={formData.orejas}
            />
<br/>

<input
                type="text"
                placeholder="Color"
                onChange={handleChange}
                name="color"
                value={formData.color}
            />
<br/>

<input
                type="text"
                placeholder="Manchas"
                onChange={handleChange}
                name="manchas"
                value={formData.manchas}
            />
<br/>


                <textarea class="text-area"
                value={formData.observaciones}
                placeholder="Observaciones"
                onChange={handleChange}
                name="observaciones"
            />
       
 <br/>       


<br />


      

    </div>
            
    <div class="seccion--derecha">

    
        <p>¿Cuándo se perdió? *</p>
        <label for="start">Fecha</label>

        <input type="date" id="fecha" name="fecha" value={formData.fecha}
                onChange={handleChange}

        min="2000-01-01" max="2022-12-31" 
        required
        />



    <p>Foto 1*</p>

<label for="foto1">Select image:</label>
<input type="file" id="foto1" name="foto1" value={formData.foto1}
                onChange={handleChange} accept="image/*" />
<br/>            
<p>Foto 2</p>

<label for="foto2">Select image:</label>
<input type="file" id="foto1" name="foto1" value={formData.foto2}
                onChange={handleChange} accept="image/*" />
<br/>            
<p>Foto 3</p>

<label for="foto3">Select image:</label>
<input type="file" id="foto1" name="foto1" value={formData.foto3}
                onChange={handleChange} accept="image/*" />
<br/>            
            <input

                type="text"
                placeholder="Nombre dueño*"
                onChange={handleChange}
                name="nombreDueño"
                value={formData.nombreDueño}
                required
            />
<br/>
            <input
                type="text"
                placeholder="Telefono dueño*"
                onChange={handleChange}
                name="telefonoDueño"
                value={formData.telefonoDueño}
                required
            />
<br/>
                <input
                type="email"
                placeholder="Mail dueño"
                onChange={handleChange}
                name="mailDueño"
                value={formData.mailDueño}
                id="mail"
            />




            <br />
            <br />
            <button class="btn-registrar-mascota">REGISTRAR MASCOTA</button>

    </div>
        
        
</div>

</form>
    )
}

export default RegistrarMascota

/*
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


</div>*/