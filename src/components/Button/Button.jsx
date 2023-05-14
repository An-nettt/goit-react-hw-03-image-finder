import { Component } from 'react';
import { ButtonEl } from '../styled';

export default class Button extends Component {
  state = {
    page: 1,
  };

  //   componentDidUpdate(prevProps, prevState) {}
  nextPage = event => {
    console.log(this.state.page);

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
