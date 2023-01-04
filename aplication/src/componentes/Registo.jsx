import './Registo.css'


function Registo(){
     return(
        <div className='regPrin'>
                
            <img id='logo' src={require("../images/Encontralogo.png")} alt="" />

            <div className='Formulario'>
                <div className='carregarImg'>
                        <p>Carregar Imagem</p>
                        <p>(Opcional)</p>
                </div>
                <form action="" className='form'>
                        <input type="text" placeholder='Primeiro Nome' id='esq'/>
                        <input type="text" placeholder='Ultimo Nome' id='dir'/>
                        <input className='tTex' type="text" placeholder='Email Institucional'/>
                        <input className='tTex' type="text" placeholder='Telefone'/>
                        <input className='tTex' type="password" placeholder='Palavra-Passe'/>
                        <input className='tTex' type="password" placeholder='Confirme a Passe'/>
                        <button id='reg'>Registar e Entrar</button>
                </form>
                
            </div>
        </div>
     )
}
export default Registo;