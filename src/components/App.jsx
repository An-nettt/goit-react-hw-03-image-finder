import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';

// import { Wrapper, Title, ContactsTitle } from './styled';

export default class App extends Component {
  state = {
    pictures: null,
    status: 'idle',
  };
  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=34753200-909a3cccc831787159f9f5943&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(pictures => this.setState({ pictures }));
  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    event.currentTarget.reset();
  };

  render() {
    const { pictures, status } = this.state;

    if (status === 'idle') {
      return;
    }

    if (status === 'pending') {
      return Loader;
    }

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery>
          {pictures && <ImageGalleryItem>{pictures}</ImageGalleryItem>}
        </ImageGallery>
      </>
    );
  }
}
