import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { createBrowserHistory } from "history";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import rootReducer, { rootEpic } from "state";

import "semantic-ui-css/semantic.min.css";
import "styles/main.scss";

import App from "./App";

const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware({});

const logger = createLogger({
  collapsed: true,
  duration: true,
  timestamp: true,
  level: "log",
  diff: true,
});

const middleware = [epicMiddleware, logger];

const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), ...middleware))
);
epicMiddleware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
