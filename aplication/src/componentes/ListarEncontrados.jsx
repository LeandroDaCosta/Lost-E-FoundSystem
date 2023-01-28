import Items from "./Items"
import "./ListarEncontrados.css"
import Anuncios from "./Anuncios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 } from "uuid"

function ListarEncontrados(){

    const [items,setItems]=useState([]);

  
  useEffect(() => {
    const getDataFromServer = async () => {
      const response = await fetch("http://localhost:3000/Item", {method:'GET'});
      
      const data = await response.json();
      setItems(data);
    };

    getDataFromServer();
  }, []);

  console.log(items);

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

            {
                
            }

        <Link to={'/Detalhe'} className='dtlink'>   
          {items.map(({idp, data, local, imagem, nome, contacto, categoria, caminho})=>(
            <Items 
            key={v4()}
            data={data} 
            nome={local} 
            caminho={imagem}
            nomeItem={nome} 
            contacto={contacto} 
            categoria={categoria} 
            
            />
            ))  
          } 
        </Link>
        
    </div >
   
    </div>
</>
    )
}export default ListarEncontrados;