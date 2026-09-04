import { Link } from 'react-router-dom'
import logo from '../../assets/logo-footer.png'
import './Footer.css'

export default function Footer(){
    return(
      <footer >
            <img width={100} height={100} src={logo} alt="logo" />

                <div className='footer-wrapper-nav'>
                    <ul className='footer-nav'>
                        <li><h4>Navigation</h4></li>
                        <li>
                            <Link to={"/"}>HOME</Link>
                        </li>
                        <li>
                            <Link to={"/"}>ABOUT</Link>
                        </li>
                        <li>
                            <Link to={"/"}>MENU</Link>
                        </li>
                        <li>
                            <Link to={"/reservation"}>RESERVATIONS</Link>
                        </li>
                        <li>
                            <Link to={"/"}>ORDERS</Link>
                        </li>
                        <li>
                            <Link to={"/"}>LOOK</Link>
                        </li>
                    </ul>
                    <ul className='footer-contact'>
                        <li>
                            <h4>Contact</h4>
                        </li>
                        <li>
                            <Link to={"/"}>ADDRESS</Link>
                        </li>
                        <li>
                            <Link to={"/"}>PHONE NUMBER</Link>
                        </li>
                        <li>
                            <Link to={"/"}>MENU</Link>
                        </li>
                        <li>
                            <Link to={"/"}>EMAIL</Link>
                        </li>
                    </ul>
                    <ul className='footer-social'>
                        <h4>SOCIAL LINKS</h4>
                        <li>
                            <Link to={"https://www.instagram.com/"} target='_blank'>INSTAGRAM</Link>
                        </li>
                        <li>
                            <Link to={"https://www.facebook.com/"} target='_blank'>FACEBOOK</Link>
                        </li>
                    </ul>
                </div>
      </footer>
    )
}