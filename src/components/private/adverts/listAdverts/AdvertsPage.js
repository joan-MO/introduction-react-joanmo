import React from 'react';
import './Advert.css';
import { getAll } from '../../../../api/adverts_service';
import EmptyList from './EmptyList'
import Card from '../../../shared/Card'
import Filters from '../../../shared//Filters'
import Header from '../../../layout/Header'
import { useHistory } from 'react-router-dom';
import storage from '../../../../utils/storage';
import filtersAdverts from '../../../../utils/filters';


const AdvertsPage = ({...props}) => {

  //const initialData = storage.get('filtersStorage') || [];
  const [adverts, setAdverts] = React.useState([]);
  //const [filtersData, setFiltersData] = React.useState([]);
  const [notResult, setnotResult] = React.useState(false);
  const [error, setError] = React.useState(null);

  const history = useHistory();


  React.useEffect(() => {
    const isFilters = storage.get('filtersStorage');
    if (isFilters) {
      setAdverts(isFilters);
    } else {
      getAll().then(setAdverts).catch(error => setError(error));
    }
  }, [])
  
  
  const handleSubmit = async advertFilter => {

    try {
 
    let filters = {}
    
    filtersAdverts(filters, advertFilter)
    
    //getAll(filters).then(setAdverts)
    
    const advertsFilters = await getAll(filters);
    setAdverts(advertsFilters)
    storage.set('filtersStorage', advertsFilters);
    setnotResult(true)     
    } catch (error) {
      console.error(error);
    }

  };

  const resetAdverts = () => {
    getAll().then(setAdverts);
    storage.remove('filtersStorage');
  }

  if (error) {
    history.push('/login');
  }

  return (
    <div>
      <Header {...props} />
      <Filters onSubmit={handleSubmit} resetFilters={resetAdverts} />
      
    <div className="container">
        {adverts.length ? <Card adverts={adverts} /> : <EmptyList notResult={notResult}/>}
      </div>
    </div>
    )
}

export default AdvertsPage;