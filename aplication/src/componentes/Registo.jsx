
import './Registo.css'
//import Header from './Header';
import { useState } from "react"
import Axios from "axios"
function Registo(props){
    
    const url='http://localhost:3000/pessoa'
    const [pessoa,Setpessoa]= useState({ nome:"", unome:'',email:"",contacto:""});
        

        const submit =(e)=>{
            e.preventDefault()
            Axios.post(url,{nome:pessoa.nome, unome:pessoa.unome,email:pessoa.email,contacto:pessoa.contacto})
            .then((res)=>{console.log(res.pessoa)})
        }
        function handleOnchange(e){
            const pes={...pessoa}
            pes[e.target.id]= e.target.value
            Setpessoa(pes)
            console.log(pes)
            
        }


    
     return(
        <div className='regPrin'>
                
            <img id='logo' src={require("../images/Encontralogo.png")} alt="" />

            <div className='Formulario'>
                <div className='carregarImg'>
                        <p>Carregar Imagem</p>
                        <p>(Opcional)</p>
                </div>
                <form action="" className='form' onSubmit={(e)=>submit(e)} >
                        <input onChange={(e)=>handleOnchange()} name="fname" className='tTex' type="text" placeholder='Primeiro Nome'  id='esq'/>
                        <input onChange={(e)=>handleOnchange()} name="lname" className='tTex' type="text" placeholder='Ultimo Nome'  id='dir'/>
                        <input onChange={(e)=>handleOnchange()} name="mail" className='tTex' type="text"  id='ml'  placeholder='Email Institucional'/>
                        <input onChange={(e)=>handleOnchange()} name="fone" className='tTex' type="text" id='baica'   placeholder='Telefone'/>
                        <input onChange={(e)=>handleOnchange()} name="senha" className='tTex' type="password" id='snn' placeholder='Palavra-Passe'/>
                        <input onChange={(e)=>handleOnchange()} name="senha2" className='tTex' type="password" id='snh' placeholder='Confirme a Passe'/>
                        <button id='reg'>Registar e Entrar</button>
                </form>
                
            </div>
        </div>
     )
}
export default Registo;