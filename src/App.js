import React from 'react';
import T from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AdvertsPage, AdvertPage, NewAdvertPage } from './components/private/adverts';
import { NotFoundPage } from './components/errors';
import {LoginPage, PrivateRoute} from './components/auth'
import { AuthContextProvider } from './components/auth/context';


function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => setIsLogged(false);

  const authValue = {
    isLogged,
    onLogout: handleLogout,
    onLogin: handleLogin,
  };

  return (
    <div className="App">
      <AuthContextProvider value={authValue}>
        <Switch>
          <PrivateRoute path="/advert/:advertId">
            <AdvertPage />
          </PrivateRoute>
          <PrivateRoute path="/new-advert">
            <NewAdvertPage />
          </PrivateRoute>
          <Route path="/login" >
            <LoginPage />
          </Route>
          <PrivateRoute path="/adverts">
            <AdvertsPage />
          </PrivateRoute>
          <Route path="/404">
            <NotFoundPage />
          </Route>
          <Route exact path='/'>
            <Redirect to="/adverts" />
          </Route>
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

App.propTypes = {
  isInitiallyLogged: T.bool.isRequired,
};


export default App;
