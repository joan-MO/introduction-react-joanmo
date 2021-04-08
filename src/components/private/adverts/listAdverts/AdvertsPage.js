import React from 'react';
import './Advert.css';
import { getAll } from '../../../../api/adverts_service';
import EmptyList from './EmptyList'
import Card from '../../../shared/Card'
import Filters from '../../../shared//Filters'
import Header from '../../../layout/Header'

const AdvertsPage = () => {

  const [adverts, setAdverts] = React.useState([])
  const [notResult, setnotResult] = React.useState(false);

  React.useEffect(() => {
    getAll().then(setAdverts);
  }, [])
  
  const handleSubmit = advertFilter => {
    console.log(advertFilter);
    let filters = {}
    
    if (advertFilter.name) {
      filters.name = advertFilter.name
    }
        
    if (advertFilter.sale) {
      filters.sale = advertFilter.sale
    }

    if (advertFilter.tags) {
      filters.tags = advertFilter.tags
    }

    if (advertFilter.minPrice) {
      filters.price = advertFilter.minPrice
    }

    if (advertFilter.maxPrice) {
      filters.price = advertFilter.maxPrice
    }

    if (advertFilter.minPrice && advertFilter.maxPrice) {
          filters.price = [advertFilter.minPrice, advertFilter.maxPrice]
    }
    
    getAll(filters).then(setAdverts);
    setnotResult(true)
 
  };

  const resetAdverts = () => {
    getAll().then(setAdverts);
  }
  

  return (
    <div>
      <Header isLogged onLogout />
      <Filters onSubmit={handleSubmit} resetFilters={resetAdverts} />
      
    <div className="container">
        {adverts.length ? <Card adverts={adverts} /> : <EmptyList notResult={notResult}/>}
      </div>
    </div>
    )
}

export default AdvertsPage;