import React from "react";
import Input from "../atoms/Input";
import { useTranslation } from "react-i18next";

type SearchBarProps = {
  search: string;
  setSearch: (value: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  const { t } = useTranslation();

  return (
      <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t("recherche")}
      />
  );
};

export default SearchBar;
