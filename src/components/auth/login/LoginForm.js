import React from 'react';
import T from 'prop-types';
import './Login.css';


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
        checked: event.target.checked
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
    <div className="container-fluid form-content">
    <div className="row justify-content-center">
    <div className="col-sm "> 
       <h1>Log in pop-react</h1>
      <form onSubmit={submitForm}>
        <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
            className="form-control"
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            />      
        </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
            id="password"
            className="form-control"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
            />      
        </div>
         <div className="form-check">
        <input type="checkbox" className="form-check-input" id="rememberPassword" onChange={handleChange} />
        <label className="form-check-label" htmlFor="rememberPassword" >Remember password</label>
        </div>
        <br />
      <button
        className="btn btn-primary"
        disabled={isLoading || !email || !password}
      >
        Log in
      </button>
    </form>
    </div>
    </div>
    </div>
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
