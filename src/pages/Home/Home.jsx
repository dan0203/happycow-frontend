// Modules internes
import './Home.css';
import backgroundImg from '../../assets/hero.jpg';
// Modules yarn
import { FaMagnifyingGlass } from 'react-icons/fa6';

const Home = () => {
    return (
        <main className="main-home">
            <div className="hero">
                <img src={backgroundImg} alt="Beautiful dishes" />
                <h1>Find Vegan Restaurants Nearby</h1>
                <form className="search-bar">
                    <input type="text" placeholder="Search for city, region, or zipcode" />
                    <button>
                        <FaMagnifyingGlass />
                    </button>
                </form>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#fff" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,256C384,277,480,299,576,288C672,277,768,235,864,234.7C960,235,1056,277,1152,288C1248,299,1344,277,1392,266.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </main>
    );
};

export default Home;
