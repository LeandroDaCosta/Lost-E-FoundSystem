import Items from "./Items"
import "./ListarEncontrados.css"
import Anuncios from "./Anuncios";
function ListarEncontrados(){
    return(
    <>
    <div>
    <Items categoria="ELETRONICOS" nomeItem="Iphone" nome="leandro" contacto="931675441" data="2011" caminho="../images/dims.jpg" />
  
  </div>
        <Anuncios></Anuncios>
</>
    )
}export default ListarEncontrados;