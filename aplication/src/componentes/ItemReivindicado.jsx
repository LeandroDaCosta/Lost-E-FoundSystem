
import React from 'react'
import Anuncios from './Anuncios'
import Items from "./Items"
import DescricaoItem from './DescricaoItem'
import './ItemReivindicado.css'
export default function ItemReivindicado() {
  return (
   <div>
   <div className='textao'>
      <p id='reivindicx'>Item Reivindicado</p>
      <p id='anuncx'>Anuncios</p>
   </div>
    <div className='posGeral' >  
      <div className='posItem'>
          <Items/>
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