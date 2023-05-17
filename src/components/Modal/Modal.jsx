import { Component } from 'react';
import { Overlay, ModalEl } from '../styled';

export default class Modal extends Component {
  nextPage = event => {
    console.log(event);
    // this.props.onClick(this.state.largeImg, this.state.tags);
  };

  render() {
    // const { largeImageURL, tags } = this.state.picture.hits;

    return (
      <Overlay>
        <ModalEl>{this.props.children}</ModalEl>
      </Overlay>
    );
  }
}

// {/*  */}
// const  = ({ largeImageURL, tags }) => {
// onClick={this.nextPage}
