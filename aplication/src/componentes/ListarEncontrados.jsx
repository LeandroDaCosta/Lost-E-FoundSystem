import Items from "./Items";
import "./ListarEncontrados.css";
import Anuncios from "./Anuncios";

import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { api } from "../api/api";

function List(props) {
  const { data, isLoading, isError, error } = useQuery(
    ["getItemByCategory", props.categoria],
    () => api.getItemByCategory(props.categoria)
  );

  if (isLoading) return <span>Carregando...</span>;

  if (isError) return <span>Erro: {error.message}</span>;
  if (!data.items) {
    return <span>Não existe Items dessa categoria</span>;
  }
  return (
    <>
      <Link to={"/Detalhe"} className="dtlink">
        {" "}
        {data.items.map((cat) => (
          <Items
            categoria={cat.category}
            nomeItem={cat.nome}
            nome={cat.local}
            // contacto={cat.contacto}
            // data={cat.data}
            caminho={cat.image}
          />
        ))}{" "}
      </Link>
    </>
  );
}

function ListarEncontrados() {

  const { categoria } = useParams();

  return (
    <>
      <div className="txt-top">
        <p className="txt-top-2"> {categoria}</p>
        <p className="txt-top-3"> ANUNCIOS</p>

      </div>

      <div className="materia">
        <div id="anun">
          <Anuncios></Anuncios>
        </div>
        <div id="ite">
          {}

          <List categoria={categoria} />
        </div>
      </div>
    </>
  );
}
export default ListarEncontrados;