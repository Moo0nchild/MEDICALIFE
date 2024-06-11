// src/components/SearchMedicButton.jsx
import React, { useState } from 'react';

const SearchMedicButton = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar médico..."
        value={searchText}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchMedicButton;
