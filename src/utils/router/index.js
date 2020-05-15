import React, {Component, Suspense, lazy} from 'react';
import { Switch, Route } from 'react-router';

import { ROUTE_PATHS } from 'utils/constants';

const Home = lazy(() => import('views/pages/view-container/home'));

class Router extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={ROUTE_PATHS.HOME} render={props => <Home {...props} /> } />
        </Switch>
      </Suspense>
    )
  }
}

export default Router