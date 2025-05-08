import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Artistes from './pages/Artistes.tsx';
import DefaultScreen from './templates/DefaultScreen.tsx';

function App() {
    return (
        <Router>
            <DefaultScreen>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/artistes/:genreId" element={<Artistes />} />
                </Routes>
            </DefaultScreen>
        </Router>
    );
}

export default App;
