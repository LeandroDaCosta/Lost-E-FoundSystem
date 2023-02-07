
import "./formAchado.css"


import { useState } from "react";
import { useMutation } from "react-query";
import { api } from "../api/api";


function FormAchado(props){

    const [name,setName]=useState('');
    const [local,setLocal]=useState("");
    const [category, setCategory]=useState("");
    const [description, setDescription]= useState("");
    const [userId ,setID] = useState("");
    const [image,setImg] = useState("");

    const {data, mutate}= useMutation((itemData)=> 
    api.createItem(itemData)
    );
    const list = [
      { id: 1, name: "Eletronicos"  },
      { id: 2, name: "Documentos" },
      { id: 3, name: "Outros" },
    ];


    return (
      <div className="formaPrincipal">
        <div className="formulario">
          <div className="teste">
            <form className="formu">
              <input
                className="inp"
                type="text"
                placeholder="O que encontrou?"
                onChange={(e) => setLocal(e.target.value)}
                value={local}
              />
              <input
                className="inp"
                type="text"
                placeholder="Onde encontrou?"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <br />
              <br />
              <input
                className="inp"
                type="text"
                placeholder="Contacto Preferencial?"
              />
              <select
                name="categoria"
                id="ctg"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {list.map((item, i) => (
                  <option value={item.i}>{item.name}</option>
                ))}
              </select>
              <br />
              <div className="pai">
                <input
                  className="carrega"
                  type="text"
                  placeholder="Descrição"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />

                <div className="carrega1">
                  <input
                    type="file"
                    name="image"
                    onChange={(e) => setImg(e.target.value)}
                  />
                </div>
              </div>
              <br /> <br />
              <button
                id="regI"
                type="submit"
                onClick={(e) => {
                  setID("178eaba3-927c-40ec-9b44-b34b0b44ba2d");
                  console.log(image);
                  e.preventDefault();
                  mutate({ local, description, category, image, userId });
                }}
              >
                Registar Item
              </button>
              {console.log(data)}
            </form>
          </div>
        </div>
      </div>
    );
}
export default FormAchado;