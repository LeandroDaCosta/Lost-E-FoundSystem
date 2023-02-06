import "./App.css";
import Footer from "./componentes/Footer";
import Achado from "./componentes/Achado";
import Header from "./componentes/Header";
import Detalhe from "./componentes/Detalhe";
//import Achado from './componentes/Achado';
import Login from "./componentes/Login";
import Home from "./componentes/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import Categorias from "./componentes/Categorias";
import MenuAchados from "./componentes/MenuAchados";
import Registo from "./componentes/Registo";
import ListarEncontrados from "./componentes/ListarEncontrados";
import ItemReivindicado from "./componentes/ItemReivindicado";
import VerItens from "./componentes/VerItens";
import Admin from "./componentes/Admin";

//import Login from './componentes/Login';
//import Registo from './componentes/Registo';

function App(props) {
  const dat = Registo.dados;
  return (
    <div className="body">
      <Router>
        <Header nome={dat}></Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Achado" element={<MenuAchados />} />
          <Route path="/itemAchado" element={<Achado />} />
          <Route path="/Login" element={<Login></Login>} />
          <Route path="/Perdi" element={<Categorias />} />
          <Route path="/Login" element={<Navigate to={"Login"} />}>
            {" "}
          </Route>
          <Route path="/Registar" element={<Registo></Registo>}></Route>
          <Route path="/Detalhe" element={<Detalhe></Detalhe>}></Route>
          <Route path="/Header" element={<Header></Header>}></Route>
          <Route
            path="/:categoria"
            element={ <ListarEncontrados />}
          ></Route>
          <Route path="/VerItens" element={<VerItens></VerItens>}></Route>
          <Route
            path="/Apagar"
            element={<ItemReivindicado></ItemReivindicado>}
          ></Route>
          <Route
            path="/Admin"
            element={<Admin/>}
          ></Route>

        </Routes>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
