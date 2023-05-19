import { Component } from 'react';
import Notiflix from 'notiflix';

import Searchbar from './Searchbar';
import Loader from './Loader';
import { getPictures } from '../services/getPictures';
import ImageGallery from './ImageGallery';
import Button from './Button';

import { AppStyled } from './AppStyled';

export default class App extends Component {
  state = {
    query: '',
    pictures: [],
    page: 1,
    isLoading: false,
    showButton: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });

      getPictures(this.state.query, this.state.page)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(
              `Sorry, but nothing was found for your request ${this.state.query}`
            )
          );
        })

        .then(newPictures => {
          if (newPictures.total === 0) {
            Notiflix.Notify.info('Sorry, but nothing was found for your query');
          }
          this.setState(prevState => ({
            pictures: [...prevState.pictures, ...newPictures.hits],
            showButton: this.state.page < Math.ceil(newPictures.totalHits / 12),
          }));
        })
        .catch(error => this.setState({ error, showButton: false }))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  handleSearchFormSubmit = query => {
    this.setState({ page: 1, pictures: [], query });
  };

  handleCllickNextButton = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { pictures, isLoading, showButton, error } = this.state;

    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {isLoading && <Loader />}
        {error && <p>{error.message}</p>}
        <ImageGallery pictures={pictures} />
        {showButton && <Button onClick={this.handleCllickNextButton} />}
      </AppStyled>
    );
  }
}

//
//
