
import React from 'react'
import Anuncios from './Anuncios'
import Items from "./Items"
import DescricaoItem from './DescricaoItem'
import './ItemReivindicado.css'
export default function ItemReivindicado(props) {
  return (
   <div>
   <div className='textao'>
      <p id='reivindicx'>Item Reivindicado</p>
      <p id='anuncx'>Anuncios</p>
   </div>
    <div className='posGeral' >  
      <div className='posItem'>
          <Items nome="leando" contacto=":992"/>
      </div >


        <div className='posAnun' >
            <Anuncios></Anuncios>
        </div>
     </div> 
        <div className='posDescript' >
          < DescricaoItem/>
        </div>
    
        <button className='btn-eliminar'>ELIMINAR</button>
   </div>
  )
}