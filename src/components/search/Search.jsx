const Search = () => {
  return (
    <form className="header__form search-form" id="search-form">
      <input className="search-form__input" type="text" placeholder="qidirish..." />
      <div className="search-form__dropdown search-dropdown search-dropdown--hidden">
        <button
          className="search-dropdown__close-btn button"
          id="search-dropdown-close"
          type="button"
        >
          <img
            className="search-dropdown__close-img"
            src="/images/close.svg"
            alt="icon close"
            width={20}
            height={20}
          />
        </button>
        <div className="search-dropdown__inner" id="search-dropdown" />
      </div>
    </form>
  );
};
export default Search;
