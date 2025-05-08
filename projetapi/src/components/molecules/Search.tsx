import React from "react";
import Input from "../atoms/Input";

type SearchBarProps = {
  search: string;
  setSearch: (value: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  return (
    <Input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Rechercher un genre..."
    />
  );
};

export default SearchBar;