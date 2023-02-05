import React from "react";
import "./Admin.css";

import { useQuery, useMutation,useQueryClient } from "react-query";
import { api } from "../api/api";

export default function Admin() {
    const queryClient = useQueryClient()
  const { data, isLoading } = useQuery(
    "getAllUser",
    api.getAllUsers
  );
  const mutation = useMutation((id) => {
    api.deleteUser(id).then(() => queryClient.invalidateQueries("getAllUser"));
  });

  if (isLoading) return <span>Carregando...</span>;

  /**{" "}
        {data.items.map((cat) => (
          <Items
            categoria={cat.category}
            nomeItem={cat.nome}
            nome={cat.local}
            // contacto={cat.contacto}
            // data={cat.data}
            caminho={cat.image}
          />
        ))}{" "} */

  return (
    <div className="loc">
      <table className="Tabela">
        <tr className="">
          <th>Nome</th>
          <th>Accao</th>
        </tr>
        {data.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  mutation.mutate(user.id);
                }}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
