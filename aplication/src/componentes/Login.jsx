import './Login.css'
import { Link } from 'react-router-dom';

function Login (){
    return(
        <div className='geral'>
            <img id='logo' src={require("../images/Encontralogo.png")} alt="" />
            <div className='formL'>
                <form action="">    
                    <input className='campoText' type="text" placeholder='Email Institucional'/>
                    
                    <input className='campoText' type="password" placeholder='Palavra-Passe'/>
                    
                    <button className='bbtn'> Entrar</button>
                    
                   <Link to={'/Registar'}> <button className='bbtn'>Registar</button></Link> 
                    <br />
                    <a className='fsenha' href=' ' >Esqueceu a sua senha?</a>
                </form>
            </div>
        </div>
    )
}
export default Login;