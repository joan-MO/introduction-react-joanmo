import React from 'react';
import Header from '../../../layout/Header'
import NewFormAdvert from './NewFormAdvert';
import { Redirect } from 'react-router';
import { createAdvert } from '../../../../api/adverts_service';



const NewAdvertPage = () => {
  const [error, setError] = React.useState(null);
  const [createdAdvert, setCreatedAdvert] = React.useState(null);

    const handleSubmit = async newAdvert => {
      //console.log(newAdvert);
    try {
      
      const advert = await createAdvert(newAdvert);
      setCreatedAdvert(advert);
    } catch (error) {
      setError(true);
    }
  };

  if (error && error.status === 401) {
    return <Redirect to="/login" />;
  }

  if (createdAdvert) {
    return <Redirect to={'/adverts'} />;
  }

    return (
        <div>
            <Header isLogged onLogout />
            <NewFormAdvert onSubmit={handleSubmit} />
        </div>
    )
}

export default NewAdvertPage;