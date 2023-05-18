import { ButtonEl } from './ButtonStyled';

const Button = ({ onClick }) => {
  return (
    <ButtonEl type="button" onClick={onClick}>
      Load More
    </ButtonEl>
  );
};

export default Button;
