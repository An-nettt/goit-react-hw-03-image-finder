// import PropTypes from 'prop-types';
import { ImageGalleryItemEl, ImageGalleryItemImage } from '../styled';

const ImageGalleryItem = ({ img, tags }) => {
  console.log({ img, tags });
  return (
    <ImageGalleryItemEl>
      <ImageGalleryItemImage src={img} alt={tags} />
    </ImageGalleryItemEl>
  );
};
export default ImageGalleryItem;
