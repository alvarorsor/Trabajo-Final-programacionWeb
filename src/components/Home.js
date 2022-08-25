import React from "react"
import imagenPerros from "../images/perros.png"
function Home() {
    return (
<div class="principal">

    <div class="principal--seccion--izquierda">
       
        <h1>Home Page</h1>
        <img src={imagenPerros} />
        <p>Amigos perdidos</p>
        <p>Un portal para reencontrarnos y ayudar a encontrar un nuevo hogar</p>
   
    </div>


    <div class="principal--seccion--derecha">

        <p>Si perdiste a tu mascota, no te preocupes, somos muchos y vamos a ayudarte a encontrarla junto con la comunidad</p>
        <ul>
            <li>Seleccioná en “Registrar una mascota” y registrate creando una cuenta en el portal.</li>
            <li>Posteriormente, completá los datos de tu mascota perdida en la plantilla. Mientras mas detalles brindes, mejor. No te olvides de subir fotos en buena calidad.</li>
            <li>Publicá a tu mascota en la plataforma. ¡Miles de personas verán la publicación aquí y te ayudarán en la búsqueda!. Nosotros nos encargaremos de difundirla en nuestras redes sociales y te avisaremos ante cualquier novedad.</li>
        </ul>
    
     </div>
       
       
       
 </div>
    )
}

export default Home