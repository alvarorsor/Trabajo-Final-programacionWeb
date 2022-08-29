import React from "react"
import {Link} from "react-router-dom"



export default function Navbar() {
    return (
      <header>

<ul class="nav nav-pills">
<li class="nav-item">
<FontAwesomeIcon icon="fa-thin fa-house" />
<Link to="/" class="nav-link">PRINCIPAL</Link>
</li>
<li class="nav-item">
<Link to="/BuscarMascota" class="nav-link">BUSCAR MASCOTA</Link>
</li>
<li class="nav-item">
<Link to="/RegistrarMascota" class="nav-link">REGISTRAR MASCOTA</Link>
</li>
<li class="nav-item">
  <a class="nav-link disabled">Disabled</a>
</li>
</ul>

  </header>
    )
}

/*
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/BuscarMascota">BUSCAR MASCOTA</Link></li>
<li><Link to="/EncontrarMascota">ENCONTRAR MASCOTA</Link></li>
</ul>*/


