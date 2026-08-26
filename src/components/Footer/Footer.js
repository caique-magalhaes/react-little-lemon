import logo from '../../assets/logo-footer.png'
import './Footer.css'

export default function Footer(){
    return(
      <footer >
            <img width={100} height={100} src={logo} alt="logo" />
                <ul className='footer-nav'>
                    <li><h4>Navigation</h4></li>
                    <li>
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        <a href="#">ABOUT</a>
                    </li>
                    <li>
                        <a href="#">MENU</a>
                    </li>
                    <li>
                        <a href="#">RESERVATIONS</a>
                    </li>
                    <li>
                        <a href="#">ORDERS</a>
                    </li>
                    <li>
                        <a href="#">LOOK</a>
                    </li>
                </ul>
                <ul className='footer-contact'>
                    <li>
                        <h4>Contact</h4>
                    </li>
                    <li>
                        <a href="#">ADDRESS</a>
                    </li>
                    <li>
                        <a href="#">PHONE NUMBER</a>
                    </li>
                    <li>
                        <a href="#">MENU</a>
                    </li>
                    <li>
                        <a href="#">EMAIL</a>
                    </li>
                </ul>
                <ul className='footer-social'>
                    <h4>SOCIAL LINKS</h4>
                    <li>
                        <a href="#">INSTAGRAM</a>
                    </li>
                    <li>
                        <a href="#">FACEBOOK</a>
                    </li>
                </ul>
      </footer>
    )
}