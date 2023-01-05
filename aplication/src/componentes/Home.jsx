
import "./Home.css";
//import Header from "./Header"
import Slides from "./Slides"
//import Footer from "./Footer";

function Home(){
    //const location=useLocation();
    
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