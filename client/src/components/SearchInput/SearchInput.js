import React from 'react';

const SearchInput = ({ handleChange }) => {
  return (
    <div>
      <input
        type='search'
        placeholder='Search for a token...'
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
