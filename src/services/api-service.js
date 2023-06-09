
import axios from 'axios';

export const fetchImages = async (query, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const options = {
    q: query,
    key: '34167807-b9e11592f4fcc07af941c7191',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 12,
  };
  try {
    const response = await axios.get(BASE_URL, { params: options });
    return normalizePixabayData(response.data);
  } catch {
    throw new Error('data retrieval error');
  }
}

const normalizePixabayData = (data) => {
  return {
    total: data.totalHits,
    results: data.hits.map(hit => ({
      id: hit.id,
      webformatURL: hit.webformatURL,
      largeImageURL: hit.largeImageURL,
      tags: hit.tags
    }))

  }
}