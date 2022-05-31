import { SearchbarContainer } from './Searchbar.styled';

export default function Searchbar(props) {

  return (
    <SearchbarContainer>
      <header className='Searchbar'>
        <form onSubmit={props.onSubmit} className='SearchForm'>
          <button
            type='submit'
            className='SearchForm-button'
            onClick={props.handleSubmit}
          >
            <i className='fas fa-search search__icon'></i>
            <span className='SearchForm-button-label'>Search</span>
          </button>

          <input
            className='SearchForm-input'
            type='text'
            // autocomplete="off"
            // autofocus
            placeholder='Search images and photos'
            name='imageSearch'
            // value={props.imageSearch}
            onChange={props.handleNameChange}
          />
        </form>
      </header>
    </SearchbarContainer>
  );


}
