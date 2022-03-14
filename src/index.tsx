import React from "react";
import ReactDOM from "react-dom";
import Main from "Pages/Main/index.Main";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "Modules/index";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
