import React from 'react';
import TokenHeaders from '../TokenHeaders';
import Token from '../Token';
import styles from './index.module.css';

const TokenList = ({
  filteredTokens,
  addToFavorites,
  removeFromFavorites,
  favoriteIds,
}) => {
  return (
    <div className={styles.tokenList}>
      <TokenHeaders />
      {filteredTokens.map((token) => (
        <Token
          key={token.id}
          id={token.id}
          rank={token.cmc_rank}
          name={token.name}
          symbol={token.symbol}
          price={token.quote.USD.price}
          priceChange={token.quote.USD.percent_change_24h}
          marketcap={token.quote.USD.market_cap}
          volume={token.quote.USD.volume_24h}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          favoriteIds={favoriteIds}
        />
      ))}
    </div>
  );
};

export default TokenList;
