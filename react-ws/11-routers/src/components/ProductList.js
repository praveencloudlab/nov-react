import {useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deleteProductById, listAllProducts } from '../api/ProductService';



const ProductList = () => {
    const[products,setProducts]=useState([]);
    const navigate = useNavigate();


    useEffect(()=>{
        listAllProducts()
        .then(response=>setProducts(response.data));
       
    },[products])

    let deleteProduct = (pid) =>{
        deleteProductById(pid);
        navigate('/products');
    }
    let renderProducts=()=>{
        return products.map(product=>{
            return(
                <div key={product.id}>{product.id} - {product.name} - {product.price} - {product.description} <Link to={`/add-product/${product.id}`}><button>Edit</button></Link> - <button onClick={()=>deleteProduct(product.id)}>Delete</button></div> 
                
            )
        });
    }

    return (
        <div>
            {renderProducts()}

        </div>
    );
};

export default ProductList;