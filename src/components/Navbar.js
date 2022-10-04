import React from "react"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHouse, faList, faSearch } from '@fortawesome/free-solid-svg-icons'
<FontAwesomeIcon icon="" />
const houseIcon = <FontAwesomeIcon icon={faHouse} />
const searchIcon = <FontAwesomeIcon icon={faSearch} />
const listhIcon = <FontAwesomeIcon icon={faList} />

export default function Navbar() {
    return (
      <header>


<nav class="navbar navbar-expand-lg nav-pills">
  <div class="container-fluid">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        
          <a class="nav-link" aria-current="page" href="/">{houseIcon} PRINCIPAL</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/BuscarMascota">{searchIcon} BUSCAR MASCOTA</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/RegistrarMascota">{listhIcon} REGISTRAR MASCOTA</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>




  </header>
    )
}

/*
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/BuscarMascota">BUSCAR MASCOTA</Link></li>
<li><Link to="/EncontrarMascota">ENCONTRAR MASCOTA</Link></li>
</ul>*/


