import { Component } from 'react';
import PropTypes from 'prop-types';

import { IconContext } from 'react-icons';
import { BsSearch } from 'react-icons/bs';

import {
  SearchbarStyle,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchbarStyled';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQueryChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchbarStyle>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <IconContext.Provider
              value={{
                color: 'black',
                size: 17,
                style: { verticalAlign: 'middle' },
              }}
            >
              <BsSearch />
            </IconContext.Provider>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            value={this.state.query}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleQueryChange}
          />
        </SearchForm>
      </SearchbarStyle>
    );
  }
}

Searchbar.propTypes = {
  query: PropTypes.string.isRequired,
};
