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

<ul class="nav nav-pills">
<li class="nav-item">


<Link to="/" class="nav-link">{houseIcon} PRINCIPAL</Link>
</li>
<li class="nav-item">
<Link to="/BuscarMascota" class="nav-link">{searchIcon} BUSCAR MASCOTA</Link>
</li>
<li class="nav-item">
<Link to="/RegistrarMascota" class="nav-link">{listhIcon} REGISTRAR MASCOTA</Link>
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


