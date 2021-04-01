import React from 'react';
import { useParams } from 'react-router-dom';
import { getAdvertById } from '../../../../api/adverts_service';
import CardDetail from '../../../shared/CardDetail';

const AdvertPage = () => {

    const [advert, setAdvert] = React.useState([]);
    const [error, setError] = React.useState(null);

    const params = useParams();
    const id = params.advertId

    React.useEffect(() => {
        getAdvertById(id).then(setAdvert).catch(error => setError(error))
    }, [id])
   
    return (  
        <div className="container">
            <CardDetail data={advert}/>
             {error && (
            <p>
            {error}
            </p>
            )}
        </div >      
    )
}

export default AdvertPage;