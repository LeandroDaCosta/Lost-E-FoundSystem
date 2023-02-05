import "./Registo.css";
//import Header from './Header';
import { useState } from "react";
import { useMutation } from "react-query";
import { api } from "../api/api";
import { Navigate } from "react-router-dom";

function Registo(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password1, setPassword1] = useState("");
  const [password, setPassword] = useState("");

  const { data, mutate} = useMutation((userData) =>
    api.createUser(userData)
  );

  return (
    <div className="regPrin">
      <img id="logo" src={require("../images/Encontralogo.png")} alt="" />

      <div className="Formulario">
        <div className="carregarImg">
          <p>Carregar Imagem</p>
          <p>(Opcional)</p>
        </div>

        <form action="" className="form">
          <input
            onChange={(e) => setName(e.target.value)}
            name="fname"
            value={name}
            className="tTex"
            type="text"
            placeholder="Primeiro Nome"
            id="esq"
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="mail"
            className="tTex"
            type="text"
            id="ml"
            placeholder="Email Institucional"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="fone"
            className="tTex"
            type="text"
            id="baica"
            placeholder="Telefone"
          />
          <input
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            name="senha"
            className="tTex"
            type="password"
            id="snn"
            placeholder="Palavra-Passe"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="senha2"
            className="tTex"
            type="password"
            id="snh"
            placeholder="Confirme a Passe"
          />
          <button
            id="reg"
            onClick={(e) => {
              e.preventDefault();
              if (password !== password1) alert("Password Não coincidem");
              else mutate({ name, email, phone, password });
            }}
          >
            Registar e Entrar
          </button>
          {data && <Navigate to="/" replace={true} />}
        </form>
      </div>
    </div>
  );
}
export default Registo;
