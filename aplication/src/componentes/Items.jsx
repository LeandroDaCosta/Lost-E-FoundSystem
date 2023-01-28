
import React from 'react'
import "./Items.css"

//import Anuncios from './Anuncios';
export default function Items({nome, contacto, data, nomeItem, imgSource, alt}) {
  return (
    <>
    <div className="items-components">
        <div className="component-style-left">
        <div className="component-style-left-content">
        <img className="photo-style" src={imgSource} alt={alt} />
        {
         
        }
        <div className="items-content">  
        <div className="left-text"><p>ITEM: {nomeItem}</p> </div> 
        <div className="right-text">
            <p>Por: {nome}</p>
            <p>Contactos{contacto}</p> 
            <p>Postado em :{data} </p>
        </div> 
        </div>
            </div>
           
     
            </div>
          
           
         </div>
        

    </>
  )
}