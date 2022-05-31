import React, { useCallback, useState } from 'react';
import { AppContainer } from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import { fetchImages } from './PixabayAPI';
import ImagesGallery from './ImageGallery/ImageGallery';

export default function App() {
  const [images, setImages] = useState();

  const onSearch = useCallback((event) => {
    if (event && event.target) {
      fetchImages(event.target.value)
        .then(res => res.json())
        .then(results => {
        if (results && results.hits) {
          setImages(results.hits);
        }
      });
    }
  });

  return (
    <AppContainer>
      <Searchbar handleNameChange={onSearch} />
      <ImagesGallery images={images} />

    </AppContainer>
  );
};
