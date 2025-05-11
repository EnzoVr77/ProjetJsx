import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Artistes from './pages/Artistes.tsx';
import DefaultScreen from './templates/DefaultScreen.tsx';
import ArtistDetail from "./pages/ArtistesDetails.tsx";
import TopAlbums from "./pages/TopAlbums";
import AlbumDetail from "./pages/AlbumDetails.tsx";
import TopArtists from "./pages/TopArtists";

function App() {
    return (
        <Router>
            <DefaultScreen>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/artistes/:genreId" element={<Artistes />} />
                    <Route path="/artist/:artistId" element={<ArtistDetail />} />
                    <Route path="/albums/:albumId" element={<AlbumDetail />} />
                    <Route path="/albums" element={<TopAlbums />} />
                    <Route path="/artistes" element={<TopArtists />} />
                </Routes>
            </DefaultScreen>
        </Router>
    );
}

export default App;
