import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
// import { FetchImagesAPI } from './Searchbar/Search';

// import { AppStyled } from '../styled';

// const fetchImagesAPI = new FetchImagesAPI();
export default class App extends Component {
  state = {
    pictures: null,
    loading: false,
    // status: 'idle',
  };

  componentDidMount() {
    this.setState({ loading: true });

    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=34753200-909a3cccc831787159f9f5943&image_type=photo&orientation=horizontal&per_page=12&id=736877'
    )
      .then(res => res.json())
      // .then(console.log);
      .then(pictures => this.setState({ pictures }))
      .finally(() => this.setState({ loading: false }));
  }

  handleSearchFormSubmit = query => {
    console.log(query);
  };

  //   this.props.onSubmit(this.state);
  //   event.currentTarget.reset();
  // };

  render() {
    const { loading } = this.state;

    // if (status === 'idle') {
    //   return <Searchbar />;
    // }

    // if (status === 'pending') {
    //   return <Loader />;
    // }

    // if (status === 'rejected') {
    //   return <h1>error</h1>;
    // }

    // if (status === 'resolved') {
    //   return (
    //     <ImageGallery>
    //       {pictures && <ImageGalleryItem>{pictures}</ImageGalleryItem>}
    //     </ImageGallery>
    //   );
    // }

    return (
      <>
        {loading && <Loader />}
        <Searchbar onSubmitForm={this.handleSearchFormSubmit} />
        {/* {pictures && <div>{pictures.hits[0].tags}</div>} */}
      </>
    );
  }
}

//
