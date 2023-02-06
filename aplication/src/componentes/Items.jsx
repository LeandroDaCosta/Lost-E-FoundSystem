
import React from 'react'
import "./Items.css"
//import Anuncios from './Anuncios';
export default function Items(props) {
    //let caminho = "../images/dims.jpeg";
  return (
    <>
      <div className="items-components">
        <div className="component-style-left">
          <div className="component-style-left-content">
            <img
              className="photo-style"
              src={require("../images/dims.jpeg")}
              alt=""
            ></img>
            <div className="items-content">
              <div className="left-text">
                <p>ITEM: {props.nome}</p>
              </div>
              <div className="right-text">
                <p>Por: {}</p>
                <p>Contactos{props.contacto}</p>
                <p>Postado em :{props.data} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}