
import Items from "./Items";
import './itemDel.css'
import { Link } from "react-router-dom";
function ItemDel(){
    return(
        <div>
            <div className="cont-pag">
                <Link to={'/Apagar'} className='estraga'> <Items categoria="ELETRONICOS" nomeItem="Iphone" nome="leandro" contacto="931675441" data="2011" caminho="../images/dims.jpg" /> </Link>
                <div className="lixo"></div>
            </div>
        </div>
    )
}
export default ItemDel;