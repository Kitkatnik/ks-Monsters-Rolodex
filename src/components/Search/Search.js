import './Search.css'

const Search = ({ className, placeholder, onChangeHandler }) => (
        <input 
          className={`search-box ${className}`}
          type='search' 
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
    )

export default Search;