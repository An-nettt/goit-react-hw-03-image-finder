import {
  SearchbarStyle,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from '../styled';

const Searchbar = () => {
  return (
    <SearchbarStyle>
      <SearchForm>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          //   autocomplete="off"
          //   autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarStyle>
  );
};

export default Searchbar;

// Searchbar.propTypes = {
//   contactsArrayOf: PropTypes.arrayOf(PropTypes.string),
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.number.isRequired,
// };
