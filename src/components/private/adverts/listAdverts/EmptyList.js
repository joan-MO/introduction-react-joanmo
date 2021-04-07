import React from 'react';
import { Link } from 'react-router-dom';


const EmptyList = ({notResult}) => {
    return (
        <div>
            {!notResult ? <Link to="/new-advert" className="btn btn-primary mt-5">Create new advert</Link> : <p>Not result found</p>}
        </div>

    )
}


export default EmptyList;