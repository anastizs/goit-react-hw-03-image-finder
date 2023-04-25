import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '34167807-b9e11592f4fcc07af941c7191';
const OPTIONS = 'image_type=photo&orientation=horizontal&per_page=12';


// { message = '', currentPage = 1 }

const fetchPhoto = async ({ message, currentPage = 1 }) => {
  const response = await axios
    .get(`${BASE_URL}/?key=${KEY}&q=${message}&${OPTIONS}&page=${currentPage}`);
  return response.data.hits;
};

// const api = {
//   fetchPhoto,
// };

export default fetchPhoto;