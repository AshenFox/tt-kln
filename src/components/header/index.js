import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <h1 className="header">Dashboard</h1>
        <h2 className="header__sub">Order basket redesign</h2>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
