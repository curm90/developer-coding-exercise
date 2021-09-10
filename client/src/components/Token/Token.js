import React from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import styles from './index.module.css';

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

  const priceUpStyles = styles.tokenPriceUp;
  const priceDownStyles = styles.tokenPriceDown;

  return (
    <div className={styles.container}>
      <div className={styles.tokenRow}>
        <div className={styles.tokenListing}>
          <div className={styles.tokenFav}>
            {favoriteIds.includes(id) ? (
              <AiFillStar
                className={styles.tokenFavIcon}
                onClick={() => removeFromFavorites(id)}
              />
            ) : (
              <AiOutlineStar
                className={styles.tokenFavIcon}
                onClick={() => addToFavorites(tokenToAdd)}
              />
            )}
          </div>
          <p className={styles.tokenRank}>{rank}</p>
        </div>
        <div className={styles.token}>
          <h3 className={styles.tokenName}>{name}</h3>
          <p className={styles.tokenSymbol}>{symbol}</p>
        </div>
        <div className={styles.tokenData}>
          <p className={styles.tokenPrice}>${price.toFixed(2)}</p>
          <p className={priceChange <= 0 ? priceDownStyles : priceUpStyles}>
            {priceChange.toFixed(2)}%
          </p>
          <p>${marketcap.toLocaleString()}</p>
          <p>${volume.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Token;
