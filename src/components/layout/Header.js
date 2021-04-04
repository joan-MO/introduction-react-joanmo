import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../api/auth';
import { useHistory } from 'react-router-dom';

const Header = ({isLogged, onLogout }) => {

    
  const history = useHistory();  
  const handleLogoutClick = () => {
      logout().then(onLogout);
      history.push('/login')
  };
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" style={{marginLeft:"10px"}}>
            <div className="header-logo">
                <h1>Home</h1>
            </div>
        </Link>
        
        <form className="form-inline my-2 my-lg-0 bg-dark">
        <Link
          to="/new-advert"
          variant="primary"
          className="btn btn-primary"
          style={{marginRight:"10px"}}
        >
          New Advert
        </Link>
            {isLogged ? (
          <button className="btn btn-primary" onClick={handleLogoutClick}>
            Log out
          </button>
            ) : (
          <button
            // as={Link}
            to="/login"
            className="btn btn-primary"
          >
            Login
          </button>
            )}
        </form>
      </nav>
  );
};

export default Header;


