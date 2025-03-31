import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
    return (
        <nav className="bg-black text-white px-6 py-3 fixed top-0 left-0 w-full flex items-center">
            <div className="flex items-center space-x-2">
                <span className="text-purple-500 text-2xl">♥</span>
                <span className="font-bold uppercase">
                    <img className="h-4 w-auto" src={logo} alt="app logo" />
                </span>
            </div>

            <div className="flex ml-4 space-x-6">
                <Link to="/" className="hover:text-purple-300">Accueil</Link>
                <Link to="/albums" className="hover:text-purple-300">Albums</Link>
                <Link to="/chanteurs" className="hover:text-purple-300">Artistes</Link>
            </div>
        </nav>
    );
}