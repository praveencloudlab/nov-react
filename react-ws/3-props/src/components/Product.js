import React from 'react';

const Product = (props) => {
    let{product,products}=props

    function renderProducts(){
        return products.map(product=>{
            return(
                <tr>
                  <td>{product.id}</td>  
                  <td>{product.name}</td>  
                  <td>{product.price}</td>  
                </tr>
            )
        })


    }

    return (
        <div>
        
        <h2>{JSON.stringify(product)}</h2>
        <hr/>
        <div>

            <table className='table table-bordered'>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    {renderProducts()}
                </tbody>
            </table>
           

        </div>

        </div>
    );
};

export default Product;