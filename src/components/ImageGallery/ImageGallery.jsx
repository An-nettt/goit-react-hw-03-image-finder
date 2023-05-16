import { Component } from 'react';
import { getPictures } from '../../services/getPictures';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';

import { ImageGalleryList } from '../styled';
import Button from 'components/Button/Button';
import Modal from '../Modal/Modal';

export default class ImageGallery extends Component {
  state = {
    pictures: [],
    isLoading: false,
    loadMore: false,
    page: 1,
    showModal: true,
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
        .then(pictures =>
          this.setState({
            loadMore: true,
            pictures: pictures.hits,
          })
        )
        .finally(() => {
          this.setState({ isLoading: false });
        });
    } else {
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
    console.log(this.state.page);
  };

  toogleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { pictures, isLoading, loadMore, showModal } = this.state;

    if (pictures.total === 0) {
      return;
    }

    return (
      <>
        <ImageGalleryList>
          {pictures &&
            pictures.map(({ id, webformatURL, tags }) => (
              <>
                <ImageGalleryItem key={id} img={webformatURL} tags={tags} />
              </>
            ))}
        </ImageGalleryList>
        {isLoading && <Loader />}
        {loadMore && <Button onClick={this.handleCllickNextButton} />}

        {showModal && <Modal pictures={pictures.hits} />}
      </>
    );
  }
}

// fetch(
//   `https://pixabay.com/api/?q=${this.props.query}&page=${this.state.page}&key=34753200-909a3cccc831787159f9f5943&image_type=photo&orientation=horizontal&per_page=12`
// )
