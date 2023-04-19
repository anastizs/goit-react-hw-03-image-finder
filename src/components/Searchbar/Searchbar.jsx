import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormSpan,
  SearchFormInput,
} from "./Searchbar.styled";

const Searchbar = () => {
  return (
    <SearchbarContainer>
      <SearchForm>
        <SearchFormButton type="submit">
          <SearchFormSpan>Search</SearchFormSpan>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarContainer>
  );
};
export default Searchbar;
