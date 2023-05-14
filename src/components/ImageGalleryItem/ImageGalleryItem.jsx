// import PropTypes from 'prop-types';
import { ImageGalleryItemEl, ImageGalleryItemImage } from '../styled';

const ImageGalleryItem = ({ id, webformatURL }) => {
  return (
    <ImageGalleryItemEl>
      <ImageGalleryItemImage src={webformatURL} alt="" id={id} />
    </ImageGalleryItemEl>
  );
};
export default ImageGalleryItem;
