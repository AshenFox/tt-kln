import PropTypes from "prop-types";

const Item = (props) => {
  return (
    <div className="list__item">
      <div className="list__column">
        <p className="list__name">
          Order Basket redesing Order Basket redesing
        </p>
      </div>
      <div className="list__column">
        <span className="list__type">Classic</span>
      </div>
      <div className="list__column ">
        <span className="list__status online">Online</span>
      </div>
      <div className="list__column">
        <p className="list__site">google.comgoogle.com</p>
      </div>
      <div className="list__column">
        <button className="list__action results">
          <span>Results</span>
        </button>
      </div>
    </div>
  );
};

Item.propTypes = {};

export default Item;
