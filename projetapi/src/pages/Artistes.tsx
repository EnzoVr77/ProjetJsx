import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Title from "../components/atoms/Title";


type Artist = {
    id: number;
    name: string;
    picture_medium: string;
};

export default function Artists() {
    const { genreId } = useParams();
    const [artists, setArtists] = useState<Artist[]>([]);

    useEffect(() => {
        fetch(`https://api.deezer.com/genre/${genreId}/artists`)
            .then((response) => response.json())
            .then((data) => setArtists(data.data))
            .catch((error) => console.error("Erreur lors de la récupération des artistes", error));
    }, [genreId]);

    return (
        <div className=" min-h-screen min-h-[80vh] pt-25 bg-gradient-to-b from-purple-900 to-black text-white px-6 py-10 flex flex-col items-center justify-start">
            <Title text="Liste des Artistes" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
                {artists.map((artist) => (
                    <Link to={`/artist/${artist.id}`} key={artist.id}>
                        <div className="bg-white p-4 rounded-lg shadow-lg hover:bg-fuchsia-200 transition-all">
                            <img src={artist.picture_medium} alt={artist.name} className="w-full h-48 object-cover rounded-md" />
                            <h3 className="mt-2 text-lg font-semibold text-black text-center">{artist.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
