import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { api } from "../api/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { data, mutate, status, isLoading } = useMutation(
    ({ email, password }) => api.login({ email, password })
  );

  if (!isLoading && status === "success") {
    console.log(data);
    
  }

  return (
    <div className="geral">
      <img id="logo" src={require("../images/Encontralogo.png")} alt="" />
      <div className="formL">
        <form action="">
          <input
            className="campoText"
            type="text"
            placeholder="Email Institucional"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="campoText"
            type="password"
            placeholder="Palavra-Passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="bbtn"
            onClick={(e) => {
              e.preventDefault();
              mutate({ email, password });
            }}
          >
            {" "}
            Entrar
          </button>

          <Link to={"/Registar"}>
            {" "}
            <button className="bbtn" id="iReg">
              Registar
            </button>
          </Link>
          <br />
          <a className="fsenha" href=" ">
            Esqueceu a sua senha?
          </a>
        </form>
      </div>
    </div>
  );
}
export default Login;
