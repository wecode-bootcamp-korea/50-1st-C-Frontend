import axios from 'axios';

const userToken = localStorage.getItem('userToken');

const testInstance = axios.create({
  baseURL: '/data',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    authorization: userToken,
  },
});

export const mainInstance = axios.create({
  baseURL: 'http://10.58.52.215:8000/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    authorization: userToken,
  },
});

export default testInstance;
