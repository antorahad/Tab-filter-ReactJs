import React from 'react';

const Product = ({item}) => {
    const{id, name, category, price} = item
    return (
        <div className='bg-slate-950 text-white w-full p-5'>
            <p>{name}</p>
            <p>{category}</p>
            <p>{price}</p>
        </div>
    );
};

export default Product;