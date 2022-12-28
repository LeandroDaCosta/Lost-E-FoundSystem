
import './Achado.css'
import Header from './Header';
import Footer from './Footer';
import FormAchado from './FormAchado';

function Achado(){
    return(
        <div>
                <Header></Header>
                
                <div className="img-back"> 
        
                        <img src={require("../images/fundo3.jpg")} className='ima' alt=""></img>
                        <div></div>

                 </div>

                 <FormAchado></FormAchado>
                <div className='espaco'></div>
                <Footer></Footer> 
        </div>
    )
}
export default Achado;