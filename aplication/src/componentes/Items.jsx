
import React from 'react'
import "./Items.css"
//import Anuncios from './Anuncios';
export default function Items(props) {
    let caminho="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com.br%2FDeu-Geral-Livro-Sobre-Esperan%25C3%25A7a%2Fdp%2F8551004905&psig=AOvVaw0c3ZwYtZH6a6vvr_O3yvMi&ust=1673912652606000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNClpNvgyvwCFQAAAAAdAAAAABAE" 
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