import './Header.css';
import { Link } from 'react-router-dom';
function Header (){
    return (
    <>
    <div className='header'>
        <div className='logo-home'>

<img src={require("../images/Encontralogo.png")} alt="" className='image'></img>

    <div className='home-style'><Link to={'/'}><p> Home</p></Link></div>
        </div>
        <div className='others'>
        <a href='a' className='lin'>Perdi</a>
        <Link to={'/Achado'}> <a href='#a' className='lin'> Encontrei</a></Link>
        
<div className='perfil'> 
<div className='submenu-perfil'>
    <a href='a' className="submenu-btn">Perfil</a>
   <Link to={'/Login'}>   <a href='a' className="submenu-btn">Iniciar sessao</a></Link>
    <a href='a' className="submenu-btn">Sair</a>
</div>
 </div>


        </div>
    </div>
    </>
    );
}
export default Header;