const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const server = express();

server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.send('Hello world');
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
