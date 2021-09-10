import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';

const Token = ({
  id,
  rank,
  name,
  symbol,
  price,
  priceChange,
  marketcap,
  volume,
  addToFavorites,
}) => {
  const tokenToAdd = {
    id,
    rank,
    name,
    symbol,
    price,
    priceChange,
    marketcap,
    volume,
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <AiOutlineStar onClick={() => addToFavorites(tokenToAdd)} />
          </div>
          <p>{rank}</p>
        </div>
        <div>
          <h3>{name}</h3>
          <p>{symbol}</p>
        </div>
        <div>
          <p>${price.toFixed(2)}</p>
          <p>{priceChange.toFixed(2)}%</p>
          <p>${marketcap.toLocaleString()}</p>
          <p>${volume.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Token;
