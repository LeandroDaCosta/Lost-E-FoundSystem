
import Items from "./Items";
import './itemDel.css'
import { Link, useParams } from "react-router-dom";
import {useEffect,useState} from "react"
import { v4 } from "uuid"
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

  const veritem = useParams();
    return(
        <div>
            <div className="cont-pag">
                <Link to="/apagar" className='estraga'> {items.map((cat)=>(
                <Items 
                key={v4()}
                categoria={cat.categoria} 
                nomeItem={cat.nome} 
                nome={cat.local} 
                contacto={cat.contacto} 
                data={cat.data} 
                imgSource={cat.imagem} />))  } 
                </Link>
          
            </div>
        </div>
    )
}
export default ItemDel;