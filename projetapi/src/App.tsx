import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import de React Router
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Home from './pages/Home';
import Details from './pages/Details';
import Albums from './pages/Albums.tsx';
import Chanteurs from './pages/Chanteurs.tsx';

function App() {
    const [count, setCount] = useState(0);

    return (
        <Router>
            <>
                <div>
                    <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/details">Détails</Link>
                        </li>
                        <li>
                            <Link to="/albums">Albums</Link>
                        </li>
                        <li>
                            <Link to="/chanteurs">Chanteurs</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details" element={<Details />} />
                    <Route path="/chanteurs" element={<Chanteurs />} />
                    <Route path="/albums" element={<Albums />} />
                </Routes>
            </>
        </Router>
    );
}

export default App;
