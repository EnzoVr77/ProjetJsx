import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../components/atoms/Title";
import { useTranslation } from "react-i18next";

type Artist = {
    id: number;
    name: string;
    picture_medium: string;
};

export default function TopArtists() {
    const { t } = useTranslation();
    const [artists, setArtists] = useState<Artist[]>([]);

    useEffect(() => {
        fetch("https://api.deezer.com/chart/0/artists?limit=50")
            .then((res) => res.json())
            .then((data) => setArtists(data.data))
            .catch((err) => {
                console.error("Erreur chargement artistes", err);
                setArtists([]);
            });
    }, []);

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <Title text={t("top_artists")} />
            {artists.length === 0 ? (
                <p className="text-center text-xl mt-8">{t("nontrouve")}</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-lg mx-auto">
                    {artists.map((artist) => (
                        <Link to={`/artist/${artist.id}`} key={artist.id}>
                            <div className="bg-purple-800 p-4 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-200">
                                <img
                                    src={artist.picture_medium}
                                    alt={artist.name}
                                    className="w-full h-48 object-cover rounded-md mb-2"
                                />
                                <p className="text-white font-semibold text-center">{artist.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
