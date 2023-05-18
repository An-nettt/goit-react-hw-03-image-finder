import { Component } from 'react';
import { Overlay, ModalEl } from './ModalStyled';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydownEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydownEscape);
  }

  handleKeydownEscape = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleOverlayClick}>
        <ModalEl>{this.props.children}</ModalEl>
      </Overlay>
    );
  }
}
