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
    loadMore: true,
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
      console.log(this.props.query);

      getPictures(this.state.query, 1)
        .then(res => res.json())
        .then(newPictures =>
          this.setState({
            loadMore: true,
            pictures: [...newPictures.hits],
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

  handleSearchFormSubmit = query => {
    this.setState({ query });
  };

  handleCllickNextButton = page => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { pictures, isLoading, loadMore } = this.state;
    console.log(pictures.length);
    // if (pictures.length === 0 || pictures.length < 12) {
    //   this.setState({ loadMore: false });
    // }

    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {isLoading && <Loader />}
        <ImageGallery pictures={pictures} />
        {loadMore && <Button onClick={this.handleCllickNextButton} />}
      </AppStyled>
    );
  }
}
