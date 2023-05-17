import { Component } from 'react';
import PropTypes from 'prop-types';
import { getPictures } from '../../services/getPictures';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';

import { ImageGalleryList } from './ImageGalleryStyled';
import Button from 'components/Button/Button';

export default class ImageGallery extends Component {
  state = {
    pictures: [],
    isLoading: false,
    loadMore: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ isLoading: true, pictures: [], page: 1 });

      getPictures(this.props.query, this.state.page)
        .then(res => res.json())
        .then(pictures => {
          if (pictures.total === 0) {
            this.setState({ loadMore: false });
          } else {
            return pictures;
          }
        })
        .then(newPictures =>
          this.setState({
            loadMore: true,
            pictures: [...prevState.pictures, ...newPictures.hits],
          })
        )
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
    if (
      prevProps.query === this.props.query &&
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });

      getPictures(this.props.query, this.state.page)
        .then(res => res.json())

        .then(newPictures =>
          this.setState({
            loadMore: true,
            pictures: [...prevState.pictures, ...newPictures.hits],
          })
        )

        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  handleCllickNextButton = page => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { pictures, isLoading, loadMore } = this.state;

    if (pictures.total === 0) {
      return;
    }

    return (
      <>
        <ImageGalleryList>
          {pictures &&
            pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
              <>
                <ImageGalleryItem
                  key={id}
                  img={webformatURL}
                  largeImg={largeImageURL}
                  tags={tags}
                />
              </>
            ))}
        </ImageGalleryList>
        {isLoading && <Loader />}
        {loadMore && <Button onClick={this.handleCllickNextButton} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadMore: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired,
};
