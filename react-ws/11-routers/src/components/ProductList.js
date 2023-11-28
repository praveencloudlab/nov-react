import {useState,useEffect} from 'react';
import axios from 'axios'


const ProductList = () => {

    const[products,setProducts]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/products')
        .then(response=>setProducts(response.data));
    },[])

    let renderProducts=()=>{
        return products.map(product=>{
            return(
                <li>{product.id} - {product.name} - <a href=''>Edit</a></li>
                
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