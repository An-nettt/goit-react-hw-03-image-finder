import { Component } from 'react';
import { Overlay, ModalEl } from '../styled';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        this.props.onClose();
      }
    });
  }

  render() {
    return (
      <Overlay>
        <ModalEl>{this.props.children}</ModalEl>
      </Overlay>
    );
  }
}
