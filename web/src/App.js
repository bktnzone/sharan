import React, { Component } from 'react';
import { HashRouter, Route, Switch ,withRouter} from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import PrivateRoute from './helpers/private-route';
import PublicRoute from './helpers/public-route';
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./components/Login'));


class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
            <Route exact path="/login" name="Login Page" component={withRouter(Login)} />

              <PrivateRoute path="/" name="Home"  component={withRouter(DefaultLayout)} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
