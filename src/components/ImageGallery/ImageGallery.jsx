import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import { ImageGalleryList } from '../styled';

export default class ImageGallery extends Component {
  state = {
    pictures: null,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      fetch(
        `https://pixabay.com/api/?q=${this.props.query}&page=1&key=34753200-909a3cccc831787159f9f5943&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(pictures => this.setState({ pictures }));
    }
  }

  render() {
    console.log(this.state.pictures);
    return (
      <ImageGalleryList>
        {this.state.pictures &&
          this.state.pictures.hits.map(({ id, webformatURL, tags }) => (
            <ImageGalleryItem key={id} img={webformatURL} tags={tags} />
          ))}
      </ImageGalleryList>
    );
  }
}
