import React from 'react';
import { getTags } from '../../../../api/adverts_service';


const NewFormAdvert = ({ onSubmit }) => {
  const [tagList, setTagList] = React.useState([]);
    const [content, setContent] = React.useState({
        name: '',
        sale: '',
        price: '',
        tags: '',
        photo: ''
    });

  React.useEffect(() => {
    getTags().then(setTagList);
  }, [])

  const changeName = event => {
      const newContent = { ...content, name: event.target.value };
      setContent(newContent);
    };

  const changeSale = event => {  
      const newContent = { ...content, sale: event.target.value};
      setContent(newContent);
    };
    
    
  const changePrice = event => {
      var value = parseInt(event.target.value) || 0;
      const newContent = { ...content, price: value };
      setContent(newContent);
    };

  const changeTags = event => {
      const newContent = { ...content, tags: Array.from(event.target.selectedOptions, item => item.value) };
      setContent(newContent);
     };

  const changePhoto = event => {
      
    const img = event.target.files[0]

    const newContent = { ...content, photo: img };
    setContent(newContent);

  };
    
    
    const submitForm = event => {
        event.preventDefault();
        onSubmit(content);
    };

    const { name, sale, price, tags } = content;
      
    return (
    <div>
    <div className="container-fluid form-content">
    <div className="row justify-content-center">
    <div className="col-sm "> 
       <h1>Create advert</h1>
      <form onSubmit={submitForm} encType="multipart/form-data">
        <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
            className="form-control"
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={changeName}
            required
            />      
        </div>
        
        <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="sale" id="inlineRadio1" value="true" onChange={changeSale}/>
        <label className="form-check-label" htmlFor="inlineRadio1">Venta</label>
        </div>
        <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="sale" id="inlineRadio2" value="false" onChange={changeSale}/>
        <label className="form-check-label" htmlFor="inlineRadio2">Compra</label>
        </div>
           <div className="form-group">
            <label htmlFor="price">Price: </label>
            <input
            className="form-control"
            id="price"
            type="number"
            name="price"
            value={price}
            onChange={changePrice}
            required
            />      
        </div>
        <div className="form-group mt-2">
          <select className="fom-control" multiple onChange={changeTags} required>
             {tagList.map(tag =>
               <option value={tag} key={tag}>{tag}</option>
             )}
          </select> 
        </div>
           <div className="form-group">
            <label htmlFor="photo">Photos: </label>
            <input
            id="photo"
            className="form-control"
            type="file"
            name="photo"
            onChange={changePhoto}
            />      
        </div>
        <br />
      <button
        className="btn btn-primary"
        disabled={!name || !sale || !price || !tags}
      >
        Accept
      </button>
    </form>
    </div>
    </div>
    </div>
        </div>
    )
}


export default NewFormAdvert;