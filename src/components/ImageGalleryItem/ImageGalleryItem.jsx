import PropTypes from 'prop-types';
import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import {
  ImageGalleryItemEl,
  ImageGalleryItemImage,
} from './ImageGalleryItemStyled';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;
    const { img, largeImg, tags } = this.props;
    return (
      <>
        <ImageGalleryItemEl onClick={this.openModal}>
          <ImageGalleryItemImage src={img} alt={tags} />
        </ImageGalleryItemEl>
        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={largeImg} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  showModal: PropTypes.bool.isRequired,
};
