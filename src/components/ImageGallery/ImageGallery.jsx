import { ImageGalleryContainer } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery(props) {
  if (!props.images) {
    return null;
  }

  console.log('images', props.images);

  return (
    <ImageGalleryContainer>
      <ul className='ImageGallery'>
        {props.images.map(({ id, tags, webformatURL, largeImageURL }) => (
          // <ImageGalleryItem
          //   key={id}
          //   tags={tags}
          //   smallImage={webformatURL}
          //   largeImage={largeImageURL}
          //   // onClickItem=
          // />

          <img key={id} src={webformatURL} />
        ))}
      </ul>

    </ImageGalleryContainer>

  );

}

