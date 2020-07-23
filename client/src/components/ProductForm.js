import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    // prevent default behavior of the submit
    const onSubmitHandler = e => {
        e.preventDefault();
        // post request to create a new product
        axios.post('http://localhost:8001/api/product', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
            
}
// onChange to update title, price, and description
    return (
        <> 
        <form onSubmit = {onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange = {(e) => setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange = {(e) => setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange = {(e) => setDescription(e.target.value)} />
            </p>
            <button disabled={title.length<1}>Create</button>
        </form>
        
            
        </>
    )
}

