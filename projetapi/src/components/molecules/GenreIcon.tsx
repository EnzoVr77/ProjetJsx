import React from "react";
import { Link } from "react-router-dom";

type Genre = {
  id: number;
  name: string;
};

const GenreIcon: React.FC<Genre> = ({ id, name }) => {
  return (
    <Link
      to={`/artistes/${id}`}
      className="p-6 bg-gray-900 shadow-xl rounded-xl cursor-pointer text-center text-xl font-semibold text-white hover:bg-pink-500 transition-all duration-300"
    >
      {name}
    </Link>
  );
};

export default GenreIcon;