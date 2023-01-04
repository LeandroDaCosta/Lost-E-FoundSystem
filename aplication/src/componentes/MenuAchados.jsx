
import React from 'react'
import './MenuAchados.css'
import { Link } from 'react-router-dom'

export default function MenuAchados() {
  return (
    <>
    
    <div className="content">
    <h1 className='txt'>Menu achados</h1>
    <div className='box-content'> 
     
          <Link Link to={'/verItens'}>    <div className='box'>
           <p className='txt-1'> Ver itens </p> 
           
            </div> </Link>
            <Link to={'/itemAchado'}> 
            <div className='box-2'>
             <p className='txt-1'> Adicionar itens</p>
           
            </div> 
            </Link>
    </div>
        
           
    </div>
    
    </>
  )
}