import { useRef ,useState } from 'react';
import logo from '../Components/Assets/icons_assets/Logo.svg';
import {Link} from 'react-router-dom';
import './Nav.css';
export function Nav()
{
    const about = useRef("about")
    const menu = useRef("menu")
    const handleClick = (anchor) =>{
      const id=`${anchor}-section`;
      const element = document.getElementById(id);
      console.log(about.current)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        }
    }
    const [isMobile,setIsMobile] = useState(false);
    return (
        <>
         <div className='out'>
         <nav className="navbar">
         <div className="logo"> <img src={logo} alt="logo" className='logo-img'/>  </div>
         <ul className={isMobile ? 'nav-links-mobile ' :'nav-links'}
         onClick={()=> setIsMobile(true)}>
              <Link to="/" className='home nav'>Home</Link>
              <Link to="/#about" className='home nav' onClick={()=>{handleClick(about.current)}}>About</Link>
              <Link to="/#menu" className='home nav' onClick={()=>{handleClick(menu.current)}}>Menu</Link>
              <Link to="/bookingform" className='home nav'>ReserveTable</Link>
              <Link to="/order online" className='orderonline nav'>OrderOnline</Link>
              <Link to="/login " className='home nav'>Login</Link>
              </ul>
              <button className='mobile-menu-icon' onClick={()=>setIsMobile(!isMobile)}>
             {isMobile ?
             (<i className='fas fa-times'></i>):
             (<i class="fas fa-bars"></i>)}
             </button>
            </nav>
            </div>
        </>
    )
}