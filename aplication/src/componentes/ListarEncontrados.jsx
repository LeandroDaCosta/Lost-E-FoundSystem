import Header from "./Header"
import "./ListarEncontrados.css"
import Footer from "./Footer"
function ListarEncontrados(){
    return(
    <>
    <Header/>
    <div className="txt-top">
        <p className="txt-top-2"> ELETRONICOS</p>
        <p className="txt-top-3"> ANUNCIOS</p>
    </div>
    <div className="items-components">
        <div className="component-style-left">
        <div className="component-style-left-content">
        <div className="photo-style"></div>
        <div className="items-content">  
        <div className="left-text"><p>ITEM:</p> </div> 
        <div className="right-text">
            <p>Por:</p>
            <p>Contactos</p> 
            <p>Postado em : </p>
        </div> 
        </div>
            </div>
           
     
            </div>
            <div className="component-style-right">
            
            </div>
           
         </div>
         <Footer></Footer>

</>
    )
}export default ListarEncontrados;