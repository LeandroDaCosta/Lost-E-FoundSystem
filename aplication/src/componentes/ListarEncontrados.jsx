import Items from "./Items"
import "./ListarEncontrados.css"
import Anuncios from "./Anuncios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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

         <Link to={'/Detalhe'} className='dtlink'>   {items.map((cat)=>(<Items categoria={cat.categoria} nomeItem={cat.nome} nome={cat.local} contacto={cat.contacto} data={cat.data} caminho={cat.imagem} />))  } </Link>
        
    </div >
    </div>
</>
    )
}export default ListarEncontrados;