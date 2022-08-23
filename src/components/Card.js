

import React, { Component } from 'react';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
  
  <img src={images['lili.png']} />

export default function Card(props) {
   
   
    return (
       
      
        <div className="card">
            <img src={images[props.imagen]} className="card--image" />

            <p className="card--title">{props.nombre}</p>
            <p>{props.sexo}</p>
            <p>{props.años}</p>
            <p>{props.meses}</p>
        </div>
    )
}