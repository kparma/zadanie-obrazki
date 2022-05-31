import React from 'react';

const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages() {
  return fetch(`${BASE_URL}?q=${serchedImage}&page=1&key=26616262-e3ed137e235993ae715569a6b&image_type=photo&orientation=horizontal&per_page=12`);
}

