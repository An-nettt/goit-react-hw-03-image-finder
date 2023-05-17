// import PropTypes from 'prop-types';
import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import { ImageGalleryItemEl, ImageGalleryItemImage } from '../styled';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toogleModal = event => {
    console.log(event);
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    const { img, largeImg, tags } = this.props;
    return (
      <>
        <ImageGalleryItemEl onClick={this.toogleModal}>
          <ImageGalleryItemImage src={img} alt={tags} />
        </ImageGalleryItemEl>
        {showModal && (
          <Modal>
            <img src={largeImg} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}

// const ImageGalleryItem = ({ img, tags }) => {
// largeImg, tags;
