
import React from 'react'
import "./Items.css"
//import Anuncios from './Anuncios';
export default function Items(props) {
    let caminho=require("../images/dims.jpg") 
  return (
    <>
    <div className="items-components">
        <div className="component-style-left">
        <div className="component-style-left-content">
        <img className="photo-style" src={caminho} alt='' ></img>
        <div className="items-content">  
        <div className="left-text"><p>ITEM: {props.nomeItem}</p> </div> 
        <div className="right-text">
            <p>Por: {props.nome}</p>
            <p>Contactos{props.contacto}</p> 
            <p>Postado em :{props.data} </p>
        </div> 
        </div>
            </div>
           
     
            </div>
          
           
         </div>
        

    </>
  )
}