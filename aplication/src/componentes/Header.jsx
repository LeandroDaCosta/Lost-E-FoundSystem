import './Header.css';
import { Link } from 'react-router-dom';
function Header (props){
   // const location=useLocation();
    
    return (
        
    <>
    <div className='header'>
        <div className='logo-home'>

  <Link to={'/'}>  <img src={require("../images/Encontralogo.png")} alt="" className='image'></img></Link>

    <div className='home-style'><Link to={'/'}><p> Home</p></Link></div>
    
        </div>
        <div className='others'>
      <Link to={'/Perdi'}>  <a href='a' className='lin' >Perdidos</a> </Link>
        <Link to={'/Achado'}> <a href='#a' className='lin' > Achados</a></Link>
        
        <p> Bem-vindo  {props.nome}</p>
<div className='perfil'> 
<div className='submenu-perfil'>
    <p  className="submenu-btn">Perfil</p>
   <Link to={'/Login'}>   <a href='a' className="submenu-btn">Iniciar sessao</a></Link>
    <p  className="submenu-btn">Sair</p>
</div>
 </div>


        </div>
    </div>
    </>
    );
}
export default Header;