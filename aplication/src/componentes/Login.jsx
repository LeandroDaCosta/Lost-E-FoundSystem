import './Login.css'


function Login (){
    return(
        <div className='geral'>
            <img id='logo' src={require("../images/Encontralogo.png")} alt="" />
            <div className='formL'>
                <form action="">    
                    <input type="text" placeholder='Email Institucional'/>
                    <br />
                    <input type="password" placeholder='Palavra-Passe'/>
                    <br />
                    <button>Entrar</button>
                    <br />
                    <button>Registar</button>
                    <br /> <br />
                    <a href=' ' >Esqueceu a sua senha?</a>
                </form>
            </div>
        </div>
    )
}
export default Login;