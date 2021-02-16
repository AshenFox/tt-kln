import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__link">
          <div className="footer__link-icon">
            <svg>
              <use href="../img/sprite.svg#icon__left"></use>
            </svg>
          </div>
          <span className="footer__link-text">Back</span>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
