import React from 'react';
import Token from '../Token';

const TokenList = ({ tokens }) => {
  return (
    <div>
      {tokens.map((token) => (
        <Token key={token.id} />
      ))}
    </div>
  );
};

export default TokenList;
