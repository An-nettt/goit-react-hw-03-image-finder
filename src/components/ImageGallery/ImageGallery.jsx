import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import { ImageGalleryList } from '../styled';

const ImageGallery = ({ pictures }) => {
  return (
    <ImageGalleryList>
      {pictures.map(({ hits }) => (
        <ImageGalleryItem hits={hits} />
      ))}
    </ImageGalleryList>
  );
};
export default ImageGallery;
