const BASE_URL = 'https://pixabay.com/api/';

function fetchImages(serchedName) {
  return fetch(
    `${BASE_URL}?q=${serchedName}&page=1&key=26616262-e3ed137e235993ae715569a6b&image_type=photo&orientation=horizontal&per_page=12
`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}
const api = { fetchImages };
export default api;