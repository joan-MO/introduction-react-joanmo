import React from 'react';
import LoginForm from './LoginForm';
import { login } from '../../../api/auth';

import { useAuthContext } from '../context';

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
    //login(credentials).then(() => onLogin());
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
    <div className="container-fluid form-content">
      <LoginForm isLoading={isLoading} onSubmit={handleSubmit} />
        {error && (
          
          <p className="bg-danger text-center" style={{ color: "white", position:"relative", top:"150px"}}>{error.message}  { error.status}</p>
      )}
    </div>

    )
}

export default LoginPage;