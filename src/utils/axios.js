import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://sutton-crypto-tracker.herokuapp.com',
});

export default instance;
