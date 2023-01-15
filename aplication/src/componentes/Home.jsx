
import "./Home.css";
//import Header from "./Header"
import Slides from "./Slides"
import { useEffect, useState } from "react";
//import Footer from "./Footer";

function Home() {
  //const location=useLocation();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getDataFromServer = async () => {
      const response = await fetch("http://localhost:3000/Item");
      const data = await response.json();
      setItems(data);
    };

    getDataFromServer();
  }, []);

  console.log(items);

  return (
    <>
      <div className="content-style">
        <div className="img-back">
          <input id="pesquisa" placeholder="Pesquisar..." type="text" />
        </div>
        <Slides></Slides>

        <div className="home-text">Encontra aqui o que voce perdeu </div>
      </div>
    </>
  );
}export default Home;