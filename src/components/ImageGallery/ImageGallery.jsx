import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';

import { ImageGalleryList } from '../styled';
import Button from 'components/Button/Button';

export default class ImageGallery extends Component {
  state = {
    pictures: [],
    status: 'idle',
    page: 1,
    perPage: 12,
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.query !== this.props.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: 'pending' });

      fetch(
        `https://pixabay.com/api/?q=${this.props.query}&page=${this.state.page}&key=34753200-909a3cccc831787159f9f5943&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`
      )
        .then(res => res.json())
        .then(pictures => this.setState({ pictures, status: 'resolved' }));
    }
  }

  handleCllickNextButton = page => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    console.log(this.state.pictures);
    const { pictures, status } = this.state;

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolved') {
      if (pictures.total === 0) {
        return;
      }

      return (
        <>
          <ImageGalleryList>
            {pictures.hits.map(({ id, webformatURL, tags }) => (
              <ImageGalleryItem key={id} img={webformatURL} tags={tags} />
            ))}
          </ImageGalleryList>
          <Button onClick={this.handleCllickNextButton} />
        </>
      );
    }

    return <></>;
  }
}
