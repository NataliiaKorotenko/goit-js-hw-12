import axios from 'axios';
export async function fetchPhotos(query, currentPage) {
  const url = 'https://pixabay.com/api/';
  const params = {
    key: '44727991-bc78e4ccccfc4d25cda89bd33',
    q: query,
    per_page: 15,
    page: currentPage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const { data } = await axios.get(url, { params });
    return data;
  } catch (error) {
    console.error('Error fetching photos:', error);
  }
}
