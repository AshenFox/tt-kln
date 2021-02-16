import PropTypes from "prop-types";
import Search from "./components/Search";
import List from "./components/list";
import NotFound from "./components/NotFound";
import Loader from "./components/Loader";

const Main = (props) => {
  return (
    <main>
      <div className="container">
        <Search />
        <List />
        {/* <NotFound /> */}
        {/* <Loader /> */}
      </div>
    </main>
  );
};

Main.propTypes = {};

export default Main;
