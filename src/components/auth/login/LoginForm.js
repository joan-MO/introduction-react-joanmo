import React from 'react';
import T from 'prop-types';

function LoginForm({ onSubmit, isLoading }) {
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
  });
 
  const handleChange = event => {
    setCredentials(oldCredentials => {
      const newCredentials = {
        ...oldCredentials,
        [event.target.name]: event.target.value,
      };
      return newCredentials;
    });
  };

    
  const submitForm = event => {
    event.preventDefault();
    onSubmit(credentials);
  };


  const { email, password } = credentials;

  return (
    <form className="loginForm" onSubmit={submitForm}>
      <input
        type="email"
        name="email"
        label="phone, email or username"
        className="loginForm-field"
        value={email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        label="password"
        className="loginForm-field"
        value={password}
        onChange={handleChange}
      />
      <button
        disabled={isLoading || !email || !password}
      >
        Log in
      </button>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: T.func.isRequired,
  isLoading: T.bool,
};

LoginForm.defaultProps = {
  isLoading: false,
};

export default LoginForm;
