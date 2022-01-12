import { NavLink } from "react-router-dom"
import logo from './logo2.png';

const NavBar = () => {
    return (
        <nav className="nav">
            <div>
                <NavLink to="/" className="to__link" >
                    <img className="logo__nav" src={logo} alt="lgo" />
                </NavLink>
            </div>
            <div className="Navbar">
                <NavLink to="/" className="nav__link">Home</NavLink>
                <NavLink to="/about" className="nav__link">About</NavLink>
            </div>

        </nav>
    )
}

export default NavBar
