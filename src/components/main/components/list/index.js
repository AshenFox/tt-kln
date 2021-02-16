import PropTypes from "prop-types";
import Head from "./Head";
import Item from "./Item";

const List = (props) => {
  return (
    <div className="list">
      <Head />
      <div className="list__body">
        <Item />
      </div>
    </div>
  );
};

List.propTypes = {};

export default List;
