import React from 'react';
import { Link } from 'react-router-dom';


const EmptyList = () => {
    return (
        <div>
           <Link to="/new-advert" className="btn btn-primary mt-5">Create new advert</Link>
        </div>

    )
}


export default EmptyList;