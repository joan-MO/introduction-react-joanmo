import React from 'react';
import LoginForm from './LoginForm';
import { login } from '../../../api/auth';

import {useAuthContext } from '../context';
import { useHistory, useLocation } from 'react-router-dom';


const LoginPage = () => {
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const isLogged = React.useRef(false);
        
  const resetError = React.useCallback(() => setError(), []);

  const history = useHistory();
  const location = useLocation();
  const { onLogin } = useAuthContext();

  React.useEffect(() => {
    if (isLogged.current) {
      onLogin();
      const { from } = location.state || { from: { pathname: '/' } };
      history.replace(from);
    }
  });

  const handleSubmit = async credentials => {
    login(credentials).then(() => onLogin());
    resetError();
    setIsLoading(true);
    try {
      await login(credentials);
      isLogged.current = true;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
    return (
    <div>
      <h1>Log in pop-react</h1>
      <LoginForm isLoading={isLoading} onSubmit={handleSubmit} />
      {error && (
        <div onClick={resetError} className="loginPage-error">
          {error.message}
        </div>
      )}
    </div>

    )
}

export default LoginPage;