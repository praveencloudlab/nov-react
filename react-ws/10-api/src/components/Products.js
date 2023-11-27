import {useState,useEffect} from 'react';
import { listAllProducts } from '../product-service';

const Products = () => {
    const[products,setProucts]=useState([]);
    useEffect(()=>{
        listAllProducts().then(resp=>setProucts(resp.data))
      },[])
    

      let renderProducts=()=>{
        return products.map(prod=>{
           return(
             <li>{prod.title}</li>
           )
        })
     }

     
    return (
        <div>
            {renderProducts()} 
        </div>
    );
};

export default Products;