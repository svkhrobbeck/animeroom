import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <a className="header__logo logo" href="/">
          <img
            className="logo__img"
            src="/images/logo.svg"
            alt="animexona logo"
            width={164}
            height={19}
          />
        </a>
        <div className="header__form-wrapper">
          <Link className="header__link" to="/favorites">
            <img className="header__link-img" src="/images/star.svg" alt="icon star" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
