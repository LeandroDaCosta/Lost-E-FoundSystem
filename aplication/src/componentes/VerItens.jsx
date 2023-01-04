
import ItemDel from "./ItemDel";
//import { Link } from "react-router-dom";
import './VerItens.css';
export default function VerItens(){
    return(
       <div className="general">

            <div className="texto-cb">
                    <p className="titleI">Itens Adicionados</p>
                    <div className="subTexto">
                        <p >Em caso do produto ja se encontrar em posse do
                    seu dono porfavor lembre-se sempre de apagar!</p>
                    </div>
                    
            </div>

               <ItemDel></ItemDel>
               <ItemDel></ItemDel>
               <ItemDel></ItemDel>

       </div>

    )
}