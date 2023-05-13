import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

// import { Wrapper, Title, ContactsTitle } from './styled';

export default class App extends Component {
  state = {
    pictures: null,
  };
  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=34753200-909a3cccc831787159f9f5943&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(pictures => this.setState({ pictures }));
  }
  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery>
          {this.state.pictures && (
            <ImageGalleryItem>{this.state.pictures}</ImageGalleryItem>
          )}
        </ImageGallery>
      </>
    );
  }
}
