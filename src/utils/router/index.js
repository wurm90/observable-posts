import React, { Component, Suspense, lazy } from "react";
import { Switch, Route } from "react-router";

import { ROUTE_PATHS } from "utils/constants";

const Home = lazy(() => import("views/pages/view-container/home"));
const Post = lazy(() => import("views/pages/view-container/post"));
const Create = lazy(() => import("views/pages/view-container/create"));
const Edit = lazy(() => import("views/pages/view-container/edit"));

class Router extends Component {
  render() {
    return (
      <Suspense fallback={<div style={{ color: "#FFF" }}>Loading...</div>}>
        <Switch>
          <Route
            path={ROUTE_PATHS.POST}
            render={(props) => <Post {...props} />}
          />
          <Route
            path={ROUTE_PATHS.CREATE}
            render={(props) => <Create {...props} />}
          />
          <Route
            path={ROUTE_PATHS.EDIT}
            render={(props) => <Edit {...props} />}
          />
          <Route
            path={ROUTE_PATHS.HOME}
            render={(props) => <Home {...props} />}
          />
        </Switch>
      </Suspense>
    );
  }
}

export default Router;
