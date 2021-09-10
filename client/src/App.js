import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TokenList from './components/TokenList/TokenList';
import SearchInput from './components/SearchInput';

const baseUrl = 'http://localhost:5000';

function App() {
  const [tokens, setTokens] = useState([]);
  const [favoriteTokens, setFavoriteTokens] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Get an array of ids to use to check whether or not to
  // show outlined or filled favorites star
  const favoriteIds = favoriteTokens.map((token) => token.id);

  const fetchtokens = async () => {
    const { data } = await axios.get(`${baseUrl}/api/tokens`);

    setTokens(data.data);
  };

  useEffect(() => {
    fetchtokens();
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter tokens based on user input
  const filteredTokens = tokens.filter((token) =>
    token.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToFavorites = (token) => {
    const favoritesCopy = favoriteTokens;

    const tokenExists = favoritesCopy.find((tkn) => token.id === tkn.id);

    if (!tokenExists) {
      favoriteTokens.push(token);
      setFavoriteTokens([...favoritesCopy]);
    }
  };

  const removeFromFavorites = (id) => {
    const favoritesCopy = favoriteTokens;

    const index = favoritesCopy.findIndex((token) => token.id === id);

    if (index >= 0) {
      favoritesCopy.splice(index, 1);
    }

    setFavoriteTokens([...favoritesCopy]);
  };

  return (
    <div className='App'>
      <h1>CryptoCurrency Tracker</h1>
      <SearchInput handleChange={handleChange} />
      <TokenList
        addToFavorites={addToFavorites}
        filteredTokens={filteredTokens}
        removeFromFavorites={removeFromFavorites}
        favoriteIds={favoriteIds}
      />
    </div>
  );
}

export default App;
