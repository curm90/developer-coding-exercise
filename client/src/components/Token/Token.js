import React from 'react';

const Token = ({
  rank,
  name,
  symbol,
  price,
  priceChange,
  marketcap,
  volume,
}) => {
  return (
    <div>
      <div>
        <div>
          <p>Star logo</p>
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
