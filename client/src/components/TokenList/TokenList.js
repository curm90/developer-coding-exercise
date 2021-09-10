import React from 'react';
import Token from '../Token';

const TokenList = ({ tokens }) => {
  return (
    <div>
      {tokens.map((token) => (
        <Token
          key={token.id}
          rank={token.cmc_rank}
          name={token.name}
          symbol={token.symbol}
          price={token.quote.USD.price}
          priceChange={token.quote.USD.percent_change_24h}
          marketcap={token.quote.USD.market_cap}
          volume={token.quote.USD.volume_24h}
        />
      ))}
    </div>
  );
};

export default TokenList;