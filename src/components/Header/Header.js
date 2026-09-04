import { useState } from "react";
import Nav from "../Nav/Nav"
import logo from '../../assets/Logo.svg'
import menu from '../../assets/Menu.svg'
import { Link } from "react-router-dom";
import './Header.css'
export default function Header(){
     const [isNavOpen, setIsNavOpen] = useState(false);

      function toggleNav(){
          setIsNavOpen((prev)=> !prev);
    }

    return(
        <div className='wrapper-header'>
              <header className='menu'>
                <span className='menu-icon'>
                  <img onClick={toggleNav} className='menu' src={menu} alt='burger-menu' />
                </span>
                <Link to={"/"}>
                  <img className='menu-logo' src={logo} alt='logo' />
                </Link>
              </header>
              <Nav isNavOpen={isNavOpen} />
        </div>
    )
}