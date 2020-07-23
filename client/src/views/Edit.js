import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default({id}) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    axios.get('http://localhost:8001/api/product/' + id)
        .then(res=> {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
            setIsLoading(false);
        })
}, [id]);

const onSubmitHandler = e => {
    e.preventDefault();
    axios.put('http://localhost:8001/api/product/' + id, {
        title,
        price,
        description
    })
    .then(() => navigate('/api/product/' + id))
}
    if (isLoading === true) return 'Loading...';

    return (
        <>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" value={title} onChange = {(e) => setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" value={price} onChange = {(e) => setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Title</label><br/>
                <input type="text" value={title} onChange = {(e) => setDescription(e.target.value)}/>
            </p>
            <button disabled={title.length < 1}>Update</button>
            <button onClick={() => navigate("/")}>Back</button>

        </form>
            
        </>
    )
}


