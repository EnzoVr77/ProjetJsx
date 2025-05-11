import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Title from "../components/atoms/Title";

type Track = {
    id: number;
    title: string;
    preview: string;
    duration: number;
};

type Album = {
    id: number;
    title: string;
    cover_medium: string;
    artist: {
        name: string;
    };
    description?: string;
    tracks: {
        data: Track[];
    };
};

export default function AlbumDetail() {
    const { albumId } = useParams();
    const [album, setAlbum] = useState<Album | null>(null);

    useEffect(() => {
        console.log("Fetching album with id:", albumId);
        fetch(`https://api.deezer.com/album/${albumId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Album data:", data);
                setAlbum(data);
            })
            .catch((err) => {
                console.error("Erreur de chargement de l'album", err);
            });
    }, [albumId]);

    if (!album || !Array.isArray(album.tracks?.data)) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white px-6 py-10">
            <div className="flex flex-col items-center mb-10">
                <img
                    src={album.cover_medium}
                    alt={album.title}
                    className="w-40 h-40 rounded-md object-cover shadow-lg mb-4"
                />
                <Title text={album.title} />
                <p className="text-gray-300 text-sm text-center">{album.artist.name}</p>
                {album.description && <p className="text-gray-400 text-center mt-4">{album.description}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
                {album.tracks.data.map((track) => (
                    <div key={track.id} className="bg-purple-800 p-4 rounded-xl shadow-lg">
                        <p className="text-white font-semibold text-center">{track.title}</p>
                        <audio controls className="w-full mt-2">
                            <source src={track.preview} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                ))}
            </div>
        </div>
    );
}
