
import "./Home.css";
import Header from "./Header"
import Slides from "./Slides"
function Home(){
    return (
        <> 
        <div className="content-style">
        <Header></Header>
        <div className="img-back"> </div>
          <Slides></Slides> 
            <div className="home-text">Encontra aqui o que voce perdeu ! </div>
            <div className="home-bottom">
                <img src= {require("../images/Encontralogo.png")} className="home-bottom-1"></img>
                <div className="home-bottom-2"> 
                <h2>Sobre nos</h2>
                <p>Uma pequena equipa</p>
                <p>de desenvolvimento</p>
                <p>software</p>
                <h2>Acerca</h2>
                <p>software de apoio</p>
                <p>aos estudantes do ISPTEC</p>
                <p></p>
                </div>
                <div className="home-bottom-3">
                    <h2> DESNVOLVIDORES</h2>
                <p>Leandro da Costa</p>
                <p>Romeno Joao</p>
               </div>
            </div>
        </div>

        </>
    );
}export default Home;