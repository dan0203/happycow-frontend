import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Image d'une vache mignonne violette, logo de HappyCow" />
            <nav>
                <ul>
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>
                        <a href="#">Sign up</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
