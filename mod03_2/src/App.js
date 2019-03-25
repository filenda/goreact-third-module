import React from "react";
import { Provider } from "react-redux";
/**
 * 'config/reactotron' should go before 'store' import
 */
import "./config/reactotron";
import store from "./store";

import Routes from "./routes";

const App = () => (
  // 'Provider' here passes all updated info about redux states (inside store)
  // to every component inside of it
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
