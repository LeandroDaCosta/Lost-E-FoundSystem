
import './Achado.css'
//import Header from './Header';
//import Footer from './Footer';
import FormAchado from './FormAchado';

function Achado(){
    return(
        <div>
            
                
                <div className="img-backg"> 
        
                        <img src={require("../images/fundo3.jpg")} className='ima' alt=""></img>
                        <div></div>

                 </div>

                 <FormAchado></FormAchado>
                <div className='espaco'></div>
                
        </div>
    )
}
export default Achado;