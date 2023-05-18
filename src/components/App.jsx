import { Component } from 'react';

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
  };

  componentDidMount() {
    this.setState({ loading: true });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ isLoading: true, pictures: [] });

      getPictures(this.state.query, 1)
        .then(res => res.json())
        .then(newPictures =>
          this.setState({
            pictures: [...newPictures.hits],
            page: 1,
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

      getPictures(this.state.query, this.state.page)
        .then(res => res.json())

        .then(newPictures =>
          this.setState({
            pictures: [...prevState.pictures, ...newPictures.hits],
          })
        )

        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  handleSearchFormSubmit = query => {
    this.setState({ query });
  };

  handleCllickNextButton = page => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { pictures, isLoading } = this.state;
    const showButton = pictures.length === 0 || pictures.length < 12;

    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {isLoading && <Loader />}
        <ImageGallery pictures={pictures} />
        {showButton ? null : <Button onClick={this.handleCllickNextButton} />}
      </AppStyled>
    );
  }
}
