import PropTypes from "prop-types";

const NotFound = (props) => {
  return (
    <div className="not-found__container">
      <p className="not-found__message">
        Your search did not match any results
      </p>
      <button className="list__action finalize">
        <span>Reset</span>
      </button>
    </div>
  );
};

NotFound.propTypes = {};

export default NotFound;
