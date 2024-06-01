import './searchbox.style.css';

const SearchBox = ({className, placeholder, onSearchHandler}) => {
  return(
      <input
      className={`search-box ${className}`}
      type="search"
      placeholder= {placeholder}
      onChange={onSearchHandler}
    />
  )
}

export default SearchBox;