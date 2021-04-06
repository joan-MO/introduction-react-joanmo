import React from 'react';
import Header from '../../../layout/Header'
import NewFormAdvert from './NewFormAdvert';
import { createAdvert } from '../../../../api/adverts_service';
import { useHistory } from 'react-router-dom';

const NewAdvertPage = () => {
  const [error, setError] = React.useState(null);
  const [createdAdvert, setCreatedAdvert] = React.useState(null);
  const history = useHistory();

    const handleSubmit = async newAdvert => {
    try {
      const file = new Blob([newAdvert.photo], { type: 'multipart/form-data' });
      const data = new FormData();

      if (newAdvert.photo) {
        data.append('photo', file);
      }
      
      data.append('name', newAdvert.name);
      data.append('sale', newAdvert.sale);
      data.append('price', newAdvert.price);
      data.append('tags', newAdvert.tags);
      const advert = await createAdvert(data);
      setCreatedAdvert(advert);
    } catch (error) {
      setError(true);
    }
  };

  if (error && error.status === 401) {
    history.push('/404');
  }

  if (createdAdvert) {
    history.push('/adverts');
  }

    return (
        <div>
            <Header isLogged onLogout />
            <NewFormAdvert onSubmit={handleSubmit} />
        </div>
    )
}

export default NewAdvertPage;