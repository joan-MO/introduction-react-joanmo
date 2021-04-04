import React from 'react';
import { useParams } from 'react-router-dom';
import { getAdvertById } from '../../../../api/adverts_service';
import CardDetail from '../../../shared/CardDetail';
import { Redirect } from 'react-router';
import Header from '../../../layout/Header'


const AdvertPage = () => {

    const [advert, setAdvert] = React.useState([]);
    const [error, setError] = React.useState(null);

    const params = useParams();
    const id = params.advertId

    React.useEffect(() => {
        getAdvertById(id).then(setAdvert).catch(error => setError(error))
    }, [id])

    
     if (error && error.status === 404) {
      return <Redirect to="/404" />;
    }

    return (
        <div>
            <Header isLogged onLogout/>
            <div className="container">
                <CardDetail data={advert} />
            </div >
        </div>      
    )
}

export default AdvertPage;