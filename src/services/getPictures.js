const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34753200-909a3cccc831787159f9f5943';

export const getPictures = (query, page) => {
  return fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};
