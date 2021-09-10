import React from 'react';
import styles from './index.module.css';

const TokenHeaders = () => {
  return (
    <div className={styles.tokenRow}>
      <div className={styles.tokenRank}>
        <p>Rank</p>
      </div>
      <div className={styles.token}>
        <p>Name</p>
      </div>
      <div className={styles.tokenData}>
        <p>Price</p>
        <p>24h %</p>
        <p>Market Cap</p>
        <p>Volume 24h</p>
      </div>
    </div>
  );
};

export default TokenHeaders;
