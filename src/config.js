require('dotenv').config();

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_API_KEY;
const LIST_ID = process.env.REACT_APP_LIST_ID;

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
const LIST_BASE_URL = `${API_URL}list/${LIST_ID}?api_key=${API_KEY}&language=en-US`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
const BACKDROP_SIZE = 'w1280';
const POSTER_SIZE = 'w780';

export {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    LIST_BASE_URL,
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  };