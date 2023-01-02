


import './Detalhe.css'
function Detalhe(){
    return(
        <div className="Gener">
                <div className="imgItem">
                    <img className='itemPic' src={require("../images/dims.jpeg")} alt="" />
                </div>
                    <img src= {require("../images/icons/icons8-chevron-left-30.png")} alt='' className="arrown"></img>
                    
        <img src= {require("../images/icons/icons8-chevron-left-30 (1).png")} alt='' className="arrown1"></img>

                <h3 className='dt'>Detalhes do Item</h3>
                    <div className='line'></div>
                

                <div className="contact">
                    <h5>Contactos</h5>
                    <p className='conteu'>Numero de telefone : 931675441</p>
                </div>
                <div className="descript">
                    <h5>Descricao do Item</h5>
                    <div className="linha"></div>
                            <p className='conteu'>Este produto foi encontrado em viano no capolo 
                            na rua da Epal , por volta das 22 horas , para  
                            reaver o produto ligue para o meu contacto </p>
                </div>
                
                <button id='reivin'>Reivindicar</button>
        </div>
    )
}
export default Detalhe;