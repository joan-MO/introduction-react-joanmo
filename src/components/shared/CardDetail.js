import React from 'react';
import { deleteAdvert } from '../../api/adverts_service';
import { useHistory } from 'react-router-dom';
import  { Modal, Button } from 'react-bootstrap'


const CardDetail = ({ data }) => {

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const image_url = process.env.REACT_APP_API_BASE_URL;
  const history = useHistory();
  const deleteElement = () => {
      deleteAdvert(data.id);
      history.push('/adverts');
  };
  
    return (
        <div className="row">
          <div className="col-4"  key={data.id}> 
          <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={!data.photo? 'https://picsum.photos/id/237/200/300': image_url+data.photo} alt="" />
            <div className="card-body">
                <button className="btn btn-danger" onClick={handleShow}>Delete item</button>
            </div>
            </div>
            </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>Would like to continue the process?</Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={deleteElement}>
                YES
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                NO
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
    )
}

export default CardDetail;