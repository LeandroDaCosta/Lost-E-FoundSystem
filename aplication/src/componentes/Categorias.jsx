
import React from 'react'
import Header from './Header'
import './Categorias.css'
import Footer from "./Footer"
export default function Categorias() {
  return (
  <>
  <Header></Header>
  
    <div className="content">
    <h2 className='txt'>CATEGORIAS</h2>
        <div className='box'>
            <p className='txt-1'> Eletrónicos</p>
            <button className='btn'>Ver mais</button>
            </div>  
            <div className='box-2'>
            <p className='txt-1'> Documentos</p>
            <button className='btn'>Ver mais</button>
            </div>  
            <div className='box-3'>
            <p className='txt-1'> Outros</p>
            <button className='btn'>Ver mais</button>
            </div>  
    </div>
    <Footer></Footer>
    </>
  )
}