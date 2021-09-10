import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TokenList from './components/TokenList/TokenList';
import SearchInput from './components/SearchInput';

const baseUrl = 'http://localhost:5000';

function App() {
  const [tokens, setTokens] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchtokens = async () => {
    const { data } = await axios.get(`${baseUrl}/api/tokens`);

    setTokens(data.data);
  };

  console.log(tokens);

  useEffect(() => {
    fetchtokens();
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTokens = tokens.filter((token) =>
    token.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='App'>
      <h1>CryptoCurrency Tracker</h1>
      <SearchInput handleChange={handleChange} />
      <TokenList filteredTokens={filteredTokens} />
    </div>
  );
}

export default App;
