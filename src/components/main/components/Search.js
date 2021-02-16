import PropTypes from "prop-types";

const Search = (props) => {
  return (
    <div className="search">
      <div className="search__icon">
        <svg>
          <use href="../img/sprite.svg#icon__search"></use>
        </svg>
      </div>
      <input
        type="text"
        className="search__input"
        placeholder="What test are you looking for?"
      />
      <span className="search__count">7 tests</span>
    </div>
  );
};

Search.propTypes = {};

export default Search;
