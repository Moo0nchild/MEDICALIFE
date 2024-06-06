import React, { useState } from 'react';

const SearchMedicButton = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Llamamos a la función onSearch pasando el texto de búsqueda
    onSearch(searchText);
  };

  const handleChange = (e) => {
    // Actualizamos el estado del texto de búsqueda cuando cambia la texbox
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
      {/* Podemos mantener el botón para una búsqueda manual si se desea */}
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default SearchMedicButton;
