import React, { useState, useEffect } from 'react';
import axios from './utils/axios';
import TokenList from './components/TokenList/TokenList';
import SearchInput from './components/SearchInput';

function App() {
  const [tokens, setTokens] = useState([]);
  const [favoriteTokens, setFavoriteTokens] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Get an array of ids to use to check whether or not to
  // show outlined or filled favorites icon
  const favoriteIds = favoriteTokens.map((token) => token.id);

  const fetchtokens = async () => {
    const { data } = await axios.get('/api/tokens');
    const favorites = await axios.get('/api/favorites');

    setTokens(data.data);
    setFavoriteTokens(favorites.data);
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

  const addToFavorites = async (token) => {
    const favoritesCopy = favoriteTokens;

    const tokenExists = favoritesCopy.find((tkn) => token.id === tkn.id);

    if (!tokenExists) {
      favoriteTokens.push(token);
      await axios.post('/api/favorites', token);
      setFavoriteTokens([...favoritesCopy]);
    }
  };

  const removeFromFavorites = async (id) => {
    const favoritesCopy = favoriteTokens;
    const index = favoritesCopy.findIndex((token) => token.id === id);

    if (index >= 0) {
      favoritesCopy.splice(index, 1);
      await axios.delete('/api/favorites/:id');
    }

    setFavoriteTokens([...favoritesCopy]);
  };

  return (
    <div className='App'>
      <h1 className='title'>CryptoCurrency Tracker</h1>
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
