import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Details from './pages/Details';
import Albums from './pages/Albums.tsx';
import Chanteurs from './pages/Chanteurs.tsx';
import Navbar from './pages/Navbar.tsx';

function App() {
    return (
        <Router>
            <>
                <div>
                    <Navbar />
                </div>

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
