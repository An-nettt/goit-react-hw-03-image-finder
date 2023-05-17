import { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonEl } from './ButtonStyled';

export default class Button extends Component {
  state = {
    page: 1,
  };

  nextPage = event => {
    this.props.onClick(this.state.page);
  };

  render() {
    return (
      <ButtonEl type="button" onClick={this.nextPage}>
        Load More
      </ButtonEl>
    );
  }
}

Button.propTypes = {
  page: PropTypes.number.isRequired,
};
