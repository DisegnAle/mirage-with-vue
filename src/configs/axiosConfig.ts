// dataAPI.js
import axios from 'axios';
export const axiosConfig = axios.create({
  headers: {
    'Content-Type': 'application/vnd.api+json',
    'Crnk-Compact': 'true'
  }
});
