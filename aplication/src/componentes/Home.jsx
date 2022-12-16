
import "./Home.css";
import Header from "./Header"
import Slides from "./Slides"
import Footer from "./Footer";
function Home(){
    return (
        <> 
        <div className="content-style">
        <Header></Header>

        <div className="img-back"> 
        
            <img src={require("../images/fundo2.jpg")} className='ima' alt=""></img>

        </div>
           <Slides></Slides> 

        
            <div className="home-text">Encontra aqui o que voce perdeu ! </div>
            <Footer></Footer>
        </div>

        </>
    );
}export default Home;