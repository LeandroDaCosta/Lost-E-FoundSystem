
import './App.css';
import Footer from './componentes/Footer';
import Achado from './componentes/Achado';
import Header from './componentes/Header';
import Detalhe from './componentes/Detalhe'
//import Achado from './componentes/Achado';
import Login from './componentes/Login';
import Home from "./componentes/Home";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Categorias from './componentes/Categorias';
import MenuAchados from './componentes/MenuAchados';
import Registo from './componentes/Registo';
import ListarEncontrados from './componentes/ListarEncontrados';
//import Login from './componentes/Login';
//import Registo from './componentes/Registo';

function App() {
  return (
    <div className='body'>
      
      
      <Router>
        <Header></Header>

        <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/Achado' element={<MenuAchados></MenuAchados>}/>
            <Route path='/itemAchado' element={<Achado></Achado>}/>
            <Route path='/Login' element={<Login></Login>}/>
            <Route path='/Perdi' element={<Categorias></Categorias>}/>
            <Route path='/Login' element={<Navigate to={'Login'} />}> </Route>
            <Route path='/Registar' element={<Registo></Registo>}></Route>
            <Route path='/Detalhe' element={<Detalhe></Detalhe>}></Route>
           
            <Route path='/Eletronicos' element={<ListarEncontrados></ListarEncontrados>}></Route>
            <Route path='/Documentos' element={<ListarEncontrados></ListarEncontrados>}></Route>
            <Route path='/Outros' element={<ListarEncontrados></ListarEncontrados>}></Route>



        </Routes>
      </Router>


        
        <Footer></Footer>

    </div>
  );
}

export default App;
