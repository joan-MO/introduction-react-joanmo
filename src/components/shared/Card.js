import React from 'react';
//import { useHistory, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Card = ({ adverts }) => {

  /*
  const history = useHistory();
  const showDetail = id => {
     history.push(`/advert/${id}`);
   };
  */
  
  return (
        <div className="row">
          {adverts.map(advert =>
          <div key={advert.id} className="col-6"> 
          <Link to={"/advert/"+advert.id}>
            <div className="card" style={{width:"18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{advert.name}</h5>
                <p className="card-text">{advert.price}</p>
                <p className="card-text">{advert.sale === true ? 'venta' : 'compra'}</p>
                <p className="card-text" style={{fontWeight:"bold"}}>{advert.tags}</p>
                <button className="btn btn-primary" /*onClick={()=>showDetail(advert.id)}*/>Show detail</button>
             </div>
             </div>   
           </Link>
          </div>
          )}
        </div>
    )
}


export default Card;