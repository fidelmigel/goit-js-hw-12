import axios from 'axios';

const API_KEY = '46590037-17c17d616a892c92268aed1a1';
const BASE_URL = 'https://pixabay.com/api/';
axios.defaults.baseURL = BASE_URL;

export const fetchImages = async (query, page = 1, perPage = 15) => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: perPage,
    },
  });
  return response.data;
};
