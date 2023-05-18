import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGalleryStyled';

const ImageGallery = ({ pictures }) => {
  return (
    <ImageGalleryList>
      {pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          img={webformatURL}
          largeImg={largeImageURL}
          tags={tags}
        />
      ))}
    </ImageGalleryList>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
