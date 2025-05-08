import { useState, useEffect } from "react";
import SearchBar from "../molecules/Search";
import GenreCard from "../molecules/GenreIcon";
import Title from "../atoms/Title";

type Genre = {
  id: number;
  name: string;
};

export default function ShowGenre() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.deezer.com/genre")
      .then((response) => response.json())
      .then((data) => setGenres(data.data))
      .catch(console.error);
  }, []);

  const displayedGenres = genres.filter(genre =>
    genre.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white px-6 py-10 flex flex-col items-center">
      <Title text="Choisissez un Genre" />
      <SearchBar search={search} setSearch={setSearch} />
      <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {displayedGenres.length > 0 
          ? displayedGenres.map(genre => <GenreCard key={genre.id} {...genre} />)
          : <p className="text-xl text-white text-center">Aucun résultat trouvé</p>}
      </div>
    </div>
  );
}
