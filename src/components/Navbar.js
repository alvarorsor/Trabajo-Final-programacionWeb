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
        
          <Link class="nav-link" aria-current="page" to="/">{houseIcon} PRINCIPAL</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/BuscarMascota">{searchIcon} BUSCAR MASCOTA</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/RegistrarMascota">{listhIcon} REGISTRAR MASCOTA</Link>
        </li>
      </ul>
     
    </div>
  </div>
</nav>


  </header>
    )
}



