// SearchBar.js
import React from "react";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="input-group mb-3">
      <input
        type="search"
        id="form1"
        className="form-control"
        placeholder="Search..."
        value={searchTerm}
        onChange={onSearchChange}
        aria-label="Search"
        aria-describedby="button-addon2"
      />
      <button className="btn btn-primary" type="button" id="button-addon2">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
