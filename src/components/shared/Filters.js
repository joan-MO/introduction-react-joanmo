import React from 'react';
import { getTags } from '../../api/adverts_service';


const Filters = ({ onSubmit, resetFilters }) => {
    const [tagList, setTagList] = React.useState([]);
    const [content, setContent] = React.useState({
        name: '',
        sale: '',
        minPrice: '',
        maxPrice: '',
        tags: '',
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
        
        
    const changePriceMin = event => {
        var value = parseInt(event.target.value) || 0;
        const newContent = { ...content, minPrice: value };
        setContent(newContent);
    };
    
    const changePriceMax = event => {
        var value = parseInt(event.target.value) || 0;
        const newContent = { ...content, maxPrice: value };
        setContent(newContent);
    };
    

    const changeTags = event => {
        const newContent = { ...content, tags: Array.from(event.target.selectedOptions, item => item.value) };
        setContent(newContent);
        };
   
    const submitForm = event => {
        event.preventDefault();
        onSubmit(content);
    };


    const { name, minPrice, maxPrice } = content;

    return (
    <div>
    <h3>Filters</h3>
    <form onSubmit={submitForm} encType="multipart/form-data" className="d-inline-flex" id="myform">
        <div className="form-group col-2">
            <label htmlFor="name">Name: </label>
            <input
            className="form-control"
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={changeName}
            />      
        </div>
        
        <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="sale" id="inlineRadio1" value="true" onChange={changeSale}/>
        <label className="form-check-label" htmlFor="inlineRadio1">sale</label>
        </div>
        <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="sale" id="inlineRadio2" value="false" onChange={changeSale}/>
        <label className="form-check-label" htmlFor="inlineRadio2">buy</label>
        </div>
        <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="sale" id="inlineRadio3" value="" onChange={changeSale}/>
        <label className="form-check-label" htmlFor="inlineRadio3">all</label>
        </div>
        <div className="form-group col-2">
            <label htmlFor="price">Price Min: </label>
            <input
            className="form-control d-inline"
            id="price"
            type="number"
            name="price"
            value={minPrice}
            onChange={changePriceMin}
             min="0" 
            />   
        </div>
        <div className="form-group col-2" style={{marginLeft:"10px"}}>
            <label htmlFor="price">Price max: </label>
            <input
            className="form-control"
            id="price"
            type="number"
            name="price"
            value={maxPrice}
            min="0"
            onChange={changePriceMax}
            />   
        </div>
        <div className="form-group col-xs-2 mt-2" style={{marginLeft:"10px"}}>
          <select className="fom-control" multiple onChange={changeTags} required>
             {tagList.map(tag =>
               <option value={tag} key={tag}>{tag}</option>
             )}
          </select> 
          </div>
        <br />
    </form>
    <input type="submit" form="myform" value="Filter" className="btn btn-primary" style={{marginLeft:"10px"}}/>
    <button className="btn btn-success" style={{marginLeft:"10px"}} onClick={resetFilters}>
          Reset
      </button>
      
    </div>


    )
}


export default Filters;