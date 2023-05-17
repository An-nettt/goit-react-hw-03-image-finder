import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

import { AppStyled } from './AppStyled';

export default class App extends Component {
  state = {
    query: '',
  };

  componentDidMount() {
    this.setState({ loading: true });
  }

  handleSearchFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    const { query } = this.state;

    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery query={query} />
      </AppStyled>
    );
  }
}

//
