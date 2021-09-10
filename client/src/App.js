import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TokenList from './components/TokenList/TokenList';

const baseUrl = 'http://localhost:5000';

function App() {
  const [tokensData, setTokensData] = useState([]);

  const fetchTokensData = async () => {
    const { data } = await axios.get(`${baseUrl}/api/tokens`);

    setTokensData(data.data);
  };

  console.log(tokensData);

  useEffect(() => {
    fetchTokensData();
  }, []);

  return (
    <div className='App'>
      <h1>CryptoCurrency Tracker</h1>
      <TokenList tokens={tokensData} />
    </div>
  );
}

export default App;
