
import './App.css';
import Footer from './componentes/Footer';
import Achado from './componentes/Achado';
import Header from './componentes/Header';
//import Achado from './componentes/Achado';
import Login from './componentes/Login';
import Home from "./componentes/Home";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
//import Login from './componentes/Login';
//import Registo from './componentes/Registo';

function App() {
  return (
    <div className='body'>
      
      
      <Router>
        <Header></Header>

        <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/Achado' element={<Achado></Achado>}/>
            <Route path='/Login' element={<Login></Login>}/>
            <Route path='/Login' element={<Navigate to={'Login'} />}> </Route>

        </Routes>
      </Router>


        
        <Footer></Footer>

    </div>
  );
}

export default App;
