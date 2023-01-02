
import React from 'react'
//import Header from './Header'
import './Categorias.css'
//import Footer from "./Footer"
import { Link } from 'react-router-dom'

export default function Categorias() {
  return (
  <>
  
  
    <div className="contentt">
    <h2 className='txtt'>CATEGORIAS</h2>
        <div className='boxx'>
            <p className='txtt-1'> Eletrónicos</p>
            <Link to={'/Eletronicos'}><button className='btnn'>Ver mais</button></Link>
            </div>  
            <div className='boxx-2'>
            <p className='txtt-1'> Documentos</p>
            <Link to={'/Documentos'}><button className='btnn'>Ver mais</button></Link>
            </div>  
            <div className='boxx-3'>
            <p className='txtt-1'> Outros</p>
            <Link to={'/Outros'}><button className='btnn'>Ver mais</button></Link>
            </div>  
    </div>
    
    </>
  )
}