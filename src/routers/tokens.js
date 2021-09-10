require('dotenv').config();
const router = require('express').Router();
const rp = require('request-promise');

router.get('/tokens', async (req, res) => {
  const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
      start: '1',
      limit: '10',
      convert: 'USD',
    },
    headers: {
      'X-CMC_PRO_API_KEY': process.env.API_KEY,
    },
    json: true,
    gzip: true,
  };

  try {
    const response = await rp(requestOptions);

    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
