import Items from "./Items"
import "./ListarEncontrados.css"
import Anuncios from "./Anuncios";
import { Link } from "react-router-dom";
function ListarEncontrados(){
    return(
    <>

    <div className="txt-top">
        <p className="txt-top-2"> ELETRONICOS</p>
        <p className="txt-top-3"> ANUNCIOS</p>
    </div>

    <div className="materia">
    <div id="anun">
        <Anuncios></Anuncios>
    </div>
    <div id="ite">

         <Link to={'/Detalhe'} className='dtlink'>  <Items categoria="ELETRONICOS" nomeItem="Iphone" nome="leandro" contacto="931675441" data="2011" caminho="../images/dims.jpg" />  </Link>
         <Link to={'/Detalhe'} className='dtlink'>  <Items categoria="ELETRONICOS" nomeItem="Iphone" nome="leandro" contacto="931675441" data="2011" caminho="../images/dims.jpg" />  </Link>
         <Link to={'/Detalhe'} className='dtlink'>  <Items categoria="ELETRONICOS" nomeItem="Iphone" nome="leandro" contacto="931675441" data="2011" caminho="../images/dims.jpg" />  </Link>
         <Link to={'/Detalhe'} className='dtlink'>  <Items categoria="ELETRONICOS" nomeItem="Iphone" nome="leandro" contacto="931675441" data="2011" caminho="../images/dims.jpg" />  </Link>
        
    </div >
    </div>
</>
    )
}export default ListarEncontrados;