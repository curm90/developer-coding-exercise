import React from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

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
  removeFromFavorites,
  favoriteIds,
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
            {favoriteIds.includes(id) ? (
              <AiFillStar onClick={() => removeFromFavorites(id)} />
            ) : (
              <AiOutlineStar onClick={() => addToFavorites(tokenToAdd)} />
            )}
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
