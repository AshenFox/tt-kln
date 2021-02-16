import PropTypes from "prop-types";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
};

App.propTypes = {};

export default App;
