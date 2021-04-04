import React from 'react';

const NewFormAdvert = ({onSubmit}) => {
    const [content, setContent] = React.useState({
        name: '',
        sale: Boolean,
        price: '',
        tags: '',
        photo: ''
    });


  const changeName = event => {
      const newContent = { ...content, name: event.target.value };
      setContent(newContent);
    };

    const changeSale = event => {
      const newCredentials = { ...content, sale: event.target.value };
      setContent(newCredentials);
    };
    
    
  const changePrice = event => {
      const newContent = { ...content, price: event.target.value };
      setContent(newContent);
    };

    const changeTags = event => {
      const newCredentials = { ...content, tags: event.target.value };
      setContent(newCredentials);
     };

    const changePhoto = e => {

        /*
        const img = event.target.files[0]
        
       let formData = new FormData();
    formData.append('file', img);
      const newCredentials = { ...content, photo: formData };
      setContent(newCredentials);*/
        
      const file = e.target.files[0];

    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            resolve(event.target.result);
        };

        reader.onerror = (err) => {
            reject(err);
        };

        reader.readAsDataURL(file);
        const newCredentials = { ...content, photo: reader };
              setContent(newCredentials);

    });
    };


    
    const submitForm = event => {
        event.preventDefault();
        onSubmit(content);
    };

    const { name, sale, price, tags } = content;
        console.log(content);


    return (
    <div>
    <div className="container-fluid form-content">
    <div className="row justify-content-center">
    <div className="col-sm "> 
       <h1>Log in pop-react</h1>
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
        <div className="form-group">
            <label htmlFor="tags">Tags: </label>
            <input
            className="form-control"
            id="tags"
            type="text"
            name="tags"
            value={tags}
            onChange={changeTags}
            required
            />      
        </div>
           <div className="form-group">
            <label htmlFor="photo">Photos: </label>
            <input
            id="photo"
            className="form-control"
            type="file"
            name="photo"
            onChange={changePhoto}
            required
            />      
        </div>
        <br />
      <button
        className="btn btn-primary"
        disabled={!name || !sale || !price || !tags }
      >
        Log in
      </button>
    </form>
    </div>
    </div>
    </div>
        </div>
    )
}


export default NewFormAdvert;