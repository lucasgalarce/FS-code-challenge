import { useState, SetStateAction, Dispatch } from "react";
import searchIcon from "assets/images/search.svg";
import closeIcon from "assets/images/close.svg";
import "./index.scss";

interface SeachProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export const Search = ({ value, onChange }: SeachProps) => {
  return (
    <div className="search-input">
      <img className="search-icon" src={searchIcon} alt="Search" />
      <input
        type="text"
        placeholder="Search all launches"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
