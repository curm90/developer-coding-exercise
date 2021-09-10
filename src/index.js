require('../db/config');
const express = require('express');
const cors = require('cors');
const tokensRouter = require('./routers/tokens');
const favoritesRouter = require('./routers/favorites');

const PORT = process.env.PORT || 5000;

const server = express();

server.use(cors());
server.use(express.json());

server.use('/api', tokensRouter);
server.use('/api', favoritesRouter);

server.get('/', (req, res) => {
  res.send('Hello world');
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
