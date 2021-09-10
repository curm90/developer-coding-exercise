import React from 'react';
import styles from './index.module.css';

const SearchInput = ({ handleChange }) => {
  return (
    <div className={styles.search}>
      <input
        className={styles.searchInput}
        placeholder='Search for a token...'
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
