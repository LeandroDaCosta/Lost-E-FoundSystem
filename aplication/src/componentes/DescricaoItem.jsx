
import React from 'react'
import "./DescricaoItem.css"
import Anuncios from './Anuncios'
export default function DescricaoItem() {
  return (
 <>

<div className='.cont'>
<div className='desc'> 
<h2> Produto reivindicado</h2>
<p> Este produto foi reivindicado , caso o produto ja 
esteja em posse do dono por favor clique no
botao abaixo e elimine .</p>
</div>
<button className='btn-eliminar'>ELIMINAR</button>


</div>
<Anuncios></Anuncios>

 </>
  )
}