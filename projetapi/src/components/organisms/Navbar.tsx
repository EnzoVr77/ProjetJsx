import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const chiffres = [
  "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix",
  "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf",
  "vingt", "vingt-et-un", "vingt-deux", "vingt-trois", "vingt-quatre"
];

export default function Navbar() {
  const [currentIndex, setCurrentIndex] = useState(9);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % chiffres.length);
    }, 5000);//5secondes
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-black text-white px-6 py-3 fixed top-0 left-0 w-full flex items-center">
      <Link to="/" className="flex items-center space-x-2">
        <span className="text-purple-500 text-2xl">♥</span>
        <h1 className='font-bold uppercase'>{chiffres[currentIndex]}-heures</h1>
      </Link>
      <div className="flex ml-4 space-x-6">
        <Link to="/albums" className="hover:text-purple-300">Albums</Link>
        <Link to="/artistes" className="hover:text-purple-300">Artistes</Link>
      </div>
    </nav>
  );
}