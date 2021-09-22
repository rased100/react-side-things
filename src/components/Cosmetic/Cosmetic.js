import React from 'react';
import { addToDb, deleteFormDb } from '../../utilitis/fakedb';

const Cosmetic = (props) => {
    console.log(props.cosmetic);
    const { name, balance, gender, _id } = props.cosmetic;
    const handlePurchase = id => {
        // set to local storage
        console.log(id);
        addToDb(id);
    }
    const handleRemove = id => {
        deleteFormDb(id);
    }
    return (
        <div>
            <h2>name: {name}</h2>
            <p>Id: {_id} Price: {balance}</p>
            <p><small>gender: {gender}</small></p>
            <button onClick={() => handlePurchase(_id)}>Purchase</button>
            <button onClick={() => handleRemove(_id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;