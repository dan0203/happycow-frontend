// Modules internes
import './Header.css';
import logo from '../../assets/logo.png';
// Modules yarn
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="Image d'une vache mignonne violette, logo de HappyCow" />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign up</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
