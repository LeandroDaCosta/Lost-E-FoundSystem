import { useState } from 'react';
import './Registo.css'
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';

function Registo(props){
    const navigate=useNavigate();
    
   var [dados,setDados]=useState(" ");
    const handler=(event)=>{
        setDados(event.target.value);
    }
    const enviaPerfil=()=>{
        // navigate('/',{state:{nome:dados}})
       

    }
     return(
        <div className='regPrin'>
                
            <img id='logo' src={require("../images/Encontralogo.png")} alt="" />

            <div className='Formulario'>
                <div className='carregarImg'>
                        <p>Carregar Imagem</p>
                        <p>(Opcional)</p>
                </div>
                <form action="" className='form'>
                        <input type="text" placeholder='Primeiro Nome' onChange={handler} id='esq'/>
                        <input type="text" placeholder='Ultimo Nome' id='dir'/>
                        <input className='tTex' type="text" placeholder='Email Institucional'/>
                        <input className='tTex' type="text" placeholder='Telefone'/>
                        <input className='tTex' type="password" placeholder='Palavra-Passe'/>
                        <input className='tTex' type="password" placeholder='Confirme a Passe'/>
                        <button id='reg' onClick={()=>{enviaPerfil()}}>Registar e Entrar</button>
                </form>
                
            </div>
        </div>
     )
}
export default Registo;