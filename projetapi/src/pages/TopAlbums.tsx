import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Title from "../components/atoms/Title";

type Album = {
    id: number;
    title: string;
    cover_medium: string;
    artist: {
        name: string;
    };
};

export default function TopAlbums() {
    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        fetch("https://api.deezer.com/chart/0/albums?limit=50")
            .then((res) => res.json())
            .then((data) => setAlbums(data.data))
            .catch((err) => console.error("Erreur chargement albums", err));
    }, []);

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <Title text="Top Albums" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-lg mx-auto">
                {albums.map((album) => (
                    <Link
                        key={album.id}
                        to={`/albums/${album.id}`} // Assurez-vous que l'URL est correcte ici
                        className="bg-purple-800 p-4 rounded-xl shadow-lg transition-transform transform hover:scale-105"
                    >
                        <img
                            src={album.cover_medium}
                            alt={album.title}
                            className="w-full h-48 object-cover rounded-md mb-2"
                        />
                        <p className="text-white font-semibold text-center">{album.title}</p>
                        <p className="text-gray-300 text-sm text-center">{album.artist.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
