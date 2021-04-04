import React from 'react';
import './Advert.css';
import { getAll } from '../../../../api/adverts_service';
import EmptyList from './EmptyList'
import Card from '../../../shared/Card'
import Header from '../../../layout/Header'

const AdvertsPage = () => {

  const [adverts, setAdverts] = React.useState([])

  React.useEffect(() => {
    getAll().then(setAdverts);
  }, [])
  
  return (
    <div>
      <Header isLogged onLogout/>
    <div className="container">
      {adverts.length ? <Card adverts={adverts} /> : <EmptyList />}
      </div>
    </div>
    )
}

export default AdvertsPage;