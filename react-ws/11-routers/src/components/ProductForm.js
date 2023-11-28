import React, { useState,useEffect } from 'react';
import{useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
//import ProductService from '../api-services/ProductService';
import { useParams } from 'react-router-dom';
import axios from 'axios'
const ProductForm = (props) => {
  
    const{register,handleSubmit,reset,formState:{errors}}=useForm();
    const[product,setProduct]=useState({});
   
  useEffect(()=>{
   
  },[])

    const onSubmit = (product) =>{
          product = { ...product, 'id':Math.floor(Math.random() * 100) };
            console.log(product);
            axios.post('http://localhost:8080/products',product)
            .then(resp=>{
                console.log(resp);
            })
           // ProductService.addProduct(product)
           // .then(response=>setProduct(response.data))
           
        }
      
    

    return (
        <div>
            <h1>Product Form</h1> <hr/>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register('name',{required:true})}
                         placeholder='Product Name'
                         defaultValue={product.name}
                         />
               <span>{errors.name && <span>Name is Required</span>}</span>
            </div>

            <div>
                <input {...register('price',{required:true})}
                        
                         placeholder='Product Price'
                         defaultValue={product.price}
                         />
               <span>{errors.price && <span>Price is Required</span>}</span>
            </div>

            <div>
                <textarea {...register('description',{required:true})}
                         placeholder='Description'
                         defaultValue={product.description}
                         />
               <span>{errors.description && <span>Description is Required</span>}</span>
            </div>
            <div>
                <button>Save</button>
            </div>
            </form>
        </div>
    );
};

export default ProductForm;