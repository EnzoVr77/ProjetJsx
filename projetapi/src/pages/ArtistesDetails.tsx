import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Title from "../components/atoms/Title";
import TrackCard from "../components/molecules/TrackCards.tsx";

type Track = {
    id: number;
    title: string;
    preview: string;
    album: {
        cover_medium: string;
    };
};

type Artist = {
    name: string;
    picture_big: string;
};

export default function ArtistDetail() {
    const { artistId } = useParams();
    const [tracks, setTracks] = useState<Track[]>([]);
    const [artist, setArtist] = useState<Artist | null>(null);

    useEffect(() => {
        // Détails de l'artiste
        fetch(`https://api.deezer.com/artist/${artistId}`)
            .then((res) => res.json())
            .then((data) => {
                if (data && data.name && data.picture_big) {
                    setArtist(data);
                } else {
                    console.error("Erreur: Données de l'artiste manquantes.");
                }
            })
            .catch((err) => console.error("Erreur de chargement de l'artiste", err));

        // Titres populaires de l'artiste
        fetch(`https://api.deezer.com/artist/${artistId}/top?limit=30`)
            .then((res) => res.json())
            .then((data) => {
                if (data && data.data) {
                    setTracks(data.data);
                } else {
                    console.error("Erreur: Aucun titre trouvé pour cet artiste.");
                }
            })
            .catch((err) => console.error("Erreur de chargement des titres", err));
    }, [artistId]);

    if (!artist) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white flex items-center justify-center">
                <p>Chargement...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white px-6 py-10">
            {/* Affichage de l'artiste */}
            <div className="flex flex-col items-center mb-10">
                <img
                    src={artist.picture_big}
                    alt={artist.name}
                    className="w-40 h-40 rounded-full object-cover shadow-lg mb-4"
                />
                <Title text={artist.name} />
            </div>

            {/* Liste des titres */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
                {tracks.length > 0 ? (
                    tracks.map((track) => <TrackCard key={track.id} track={track} />)
                ) : (
                    <p>Aucun titre disponible pour cet artiste.</p>
                )}
            </div>
        </div>
    );
}
