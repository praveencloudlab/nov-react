import React, { useState,useEffect } from 'react';
import{useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
//import ProductService from '../api-services/ProductService';
import { useParams } from 'react-router-dom';
import { findProductById, saveProduct, updateProduct } from '../api/ProductService';
const ProductForm = (props) => {

    const{pid}=useParams();
    const navigate = useNavigate();
    console.log(">>> PID:: "+pid);

    const{register,handleSubmit,reset,formState:{errors}}=useForm();
    const[product,setProduct]=useState({});
   
  useEffect(()=>{

    if(pid){
        // edit logic
        findProductById(pid)
        .then(resp=>setProduct(resp.data));
    }else{
        console.log(">> New");
    }
   
  },[])

    const onSubmit = (product) =>{
       
         if(pid){
            updateProduct(pid, product);
            navigate('/products')
            
         }else{
            // save logic
            product = { ...product, 'id':Math.floor(Math.random() * 100) };
            console.log(">>> Save mode");
            saveProduct(product)
           .then(resp=>{
              console.log(resp);
           })
           navigate('/products')
         }
        

         
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
                 {pid?<button>Edit</button>:<button>Save</button>}
            </div>
            </form>
        </div>
    );
};

export default ProductForm;