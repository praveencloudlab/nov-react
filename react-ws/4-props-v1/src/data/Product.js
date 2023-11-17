import React from 'react';

const Product = (props) => {
    let{product,funName}=props;


    function updateProduct(prod){
        console.log(">>> updating product "+prod.id);
        funName(prod.id); // invokes paremt component function
    }

    return (
        <>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td><button onClick={()=>updateProduct(product)} >Edit</button></td>
        </>
    );
};

export default Product;