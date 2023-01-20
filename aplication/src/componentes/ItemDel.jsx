
import Items from "./Items";
import './itemDel.css'
import { Link } from "react-router-dom";
import {useEffect,useState} from "react"
function ItemDel(){
        const [items,setItems]=useState([]);

  
  useEffect(() => {
    const getDataFromServer = async () => {
      const response = await fetch("http://localhost:3000/Item", {method:'GET'});
      
      const data = await response.json();
      setItems(data);
    };

    getDataFromServer();
  }, []);

    return(
        <div>
            <div className="cont-pag">
                <Link to={'/Apagar'} className='estraga'> {items.map((cat)=>(<Items categoria={cat.categoria} nomeItem={cat.nome} nome={cat.local} contacto={cat.contacto} data={cat.data} caminho={cat.imagem} />))  } </Link>
          
            </div>
        </div>
    )
}
export default ItemDel;