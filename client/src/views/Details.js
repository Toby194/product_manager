import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default (props) => {
    const {id} = props;
    const [details, setDetails] = useState(null);
    const [hasError, setHasError] = useState(false);

useEffect(() => {
    axios.get('http://localhost:8001/api/product/' + id)
        .then(res => setDetails({...res.data}))
        .catch(() => setHasError(true));
}, [id]);

function  handleDelete(id) {
    axios.delete('http://localhost:8001/api/product/' + id)
        .then(() => navigate("/"))
}
    if(hasError) return 'Something went wrong in details!';

    if(details === null) return 'Loading...';

    return (
        <div>
            <h1>{details.title}</h1>
            <p>{details.price}</p>
            <p>{details.description}</p>
            <button onClick={() => navigate('/api/product/'+ id + '/edit')}>Edit</button>
            <button onClick={() => handleDelete(details._id)}>Delete</button>
            <button onClick={() => navigate("/")}>Back</button>
        </div>
    )
}


