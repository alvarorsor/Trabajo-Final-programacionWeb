import React from "react"
import {Link} from "react-router-dom"



export default function Navbar() {
    return (
      <header>

   
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
    <Link to="/">PRINCIPAL</Link></button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
    <Link to="/BuscarMascota">BUSCAR MASCOTA</Link></button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
    <Link to="/RegistrarMascota">REGISTRAR MASCOTA</Link></button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" disabled>Disabled</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
  <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">...</div>
</div>



  </header>
    )
}

/*
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/BuscarMascota">BUSCAR MASCOTA</Link></li>
<li><Link to="/EncontrarMascota">ENCONTRAR MASCOTA</Link></li>
</ul>*/

/*
<ul class="nav nav-pills">
<li class="nav-item">
<Link to="/" class="nav-link">HOME</Link>
</li>
<li class="nav-item">
<Link to="/BuscarMascota" class="nav-link">BUSCAR MASCOTA</Link>
</li>
<li class="nav-item">
<Link to="/EncontrarMascota" class="nav-link">ENCONTRAR MASCOTA</Link>
</li>
<li class="nav-item">
  <a class="nav-link disabled">Disabled</a>
</li>
</ul>*/