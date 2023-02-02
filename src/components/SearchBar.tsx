import { Input } from "@mui/material";
import React from "react";
import { SearchBarProps } from "../utils/data";

const SearchBar = ({ value, setSearch }: SearchBarProps) => {
  return (
    <div>
      <Input
        value={value}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="Search for openings"
      />
    </div>
  );
};

export default SearchBar;
