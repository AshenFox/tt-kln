import PropTypes from "prop-types";
import { Provider } from "react-redux";
import store from "../store";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import { useEffect } from "react";
import axios from "../settings/axios";

const App = (props) => {
  useEffect(() => {
    a();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
};

const a = async () => {
  const res = await axios.get("/api/sites");
  console.log(res);
};

App.propTypes = {};

export default App;
