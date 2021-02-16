import PropTypes from "prop-types";

const Head = (props) => {
  return (
    <div className="list__head">
      <div className="list__column">
        <div className="list__title-container">
          <span className="list__title">NAME</span>
          <div className="list__sort-icon">
            <svg>
              <use href="../img/sprite.svg#icon__down"></use>
            </svg>
          </div>
        </div>
      </div>
      <div className="list__column">
        <div className="list__title-container">
          <span className="list__title">TYPE</span>
          <div className="list__sort-icon">
            <svg>
              <use href="../img/sprite.svg#icon__down"></use>
            </svg>
          </div>
        </div>
      </div>
      <div className="list__column">
        <div className="list__title-container">
          <span className="list__title">STATUS</span>
          <div className="list__sort-icon">
            <svg>
              <use href="../img/sprite.svg#icon__down"></use>
            </svg>
          </div>
        </div>
      </div>
      <div className="list__column">
        <div className="list__title-container">
          <span className="list__title">SITE</span>
          <div className="list__sort-icon">
            <svg>
              <use href="../img/sprite.svg#icon__down"></use>
            </svg>
          </div>
        </div>
      </div>
      <div className="list__column"></div>
    </div>
  );
};

Head.propTypes = {};

export default Head;
