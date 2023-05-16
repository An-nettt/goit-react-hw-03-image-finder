import { Overlay, ModalEl } from '../styled';

const Modal = ({ largeImageURL, tags }) => {
  <Overlay>
    <ModalEl>
      <img src={largeImageURL} alt={tags} />
    </ModalEl>
  </Overlay>;
};

export default Modal;
