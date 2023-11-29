import axios from "axios"
   let BASE_URL='http://localhost:8080'

    export let listAllProducts=()=>{
       return axios.get(`${BASE_URL}/products`)
    }

    export let saveProduct=(product)=>{
        return axios.post(`${BASE_URL}/products`,product)
    }

    export let findProductById=(pid)=>{
        return axios.get(`${BASE_URL}/products/${pid}`);
    }

    export let updateProduct=(pid,product)=>{
        return axios.put(`${BASE_URL}/products/${pid}`,product)
    }

    export let deleteProductById=(pid)=>{
        return axios.delete(`${BASE_URL}/products/${pid}`);
    }

    



