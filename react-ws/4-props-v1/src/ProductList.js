import React from 'react';
import { productData } from './data/data';
import Product from './data/Product';

const ProductList = () => {

    let products= productData;

    function testParent(prodId){
        console.log(">> parent test method:: "+prodId);
    }

    let renderProducts=()=>{

       return productData.map((product)=>{
            return(
                <tr key={product.id}>
                     <Product funName={(prodId)=>testParent(prodId)} product={product}/>
                </tr>
            )
        })  
    }
   
    return (
        <div>

            <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody>
                 {renderProducts()}
            </tbody>
            </table>
            
        </div>
    );
};

export default ProductList;