import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default (props) => {
    const [allProducts, setAllProducts] = useState(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8001/api/product')
            .then(res => setAllProducts(res.data))
            .catch(() => setHasError(true));
    }, [allProducts]);

    function handleDelete(id) {
        axios.delete('http://localhost:8001/api/product/' + id)
            .then(res => setAllProducts(allProducts.filter(product => product._id !== id)))
    }
    if(hasError) return 'Something went wrong!';

    if(allProducts === null) return 'Loading...';

    return(
        <div>
            <h1>All Products:</h1>
            {allProducts.map(product => (
            <ul key={product._id}>
                <li><Link to={'/api/product/'+ product._id}>{product.title}</Link></li> 
                <button onClick ={() => handleDelete(product._id)}>Delete</button>
                <button onClick = {() => navigate('/api/product/' + product._id + '/edit')}></button>
            </ul>
            ))}
        </div>
    )
}