import React from 'react';
import { deleteAdvert } from '../../api/adverts_service';
import { useHistory } from 'react-router-dom';

const CardDetail = ({ data }) => {
  const history = useHistory();
  const deleteElement = () => {
      deleteAdvert(data.id);
      history.push('/adverts');
  };
    return (
        <div className="row">
          <div className="col-4"  key={data.id}> 
            <div className="card" style={{width:"18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.price}</p>
                <p className="card-text">{data.sale === true ? 'venta' : 'compra'}</p>
                <p className="card-text" style={{fontWeight:"bold"}}>{data.tags}</p>
                <button className="btn btn-danger" onClick={deleteElement}>Delete item</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default CardDetail;