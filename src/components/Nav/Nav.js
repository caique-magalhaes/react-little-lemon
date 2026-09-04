import { Link } from 'react-router-dom'
import './Nav.css'
export default function Nav(props){
    return(
        <nav className={`${props.isNavOpen ? 'display-nav':''}`}>
            <ul className="nav-items">
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
        </nav>
    )
}


