
import React from 'react'
import './MenuAchados.css'
import Home from "./Home"
import Header from './Header'
import Footer from './Footer'

export default function MenuAchados() {
  return (
    <>
    <Header></Header>
    <div className="content">
    <h2 className='txt'>Menu achados</h2>
    <div className='box-content'> 
    <div className='box'>
            <p className='txt-1'> Ver itens </p>
           
            </div>  
            <div className='box-2'>
            <p className='txt-1'> Adicionar itens</p>
           
            </div>  
    </div>
        
           
    </div>
   <Footer/>
    </>
  )
}