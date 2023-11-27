import axios from 'axios'

export function listAllProducts(){
    return axios.get('http://localhost:8080/products');
}

export function saveProduct(product){
    return axios.post('http://localhost:8080/products',product);
}

export function findProductById(id){
    return axios.get(`http://localhost:8080/products/${id}`);
}

export function updateProduct(product){
    return axios.put('http://localhost:8080/products',product);
}


export function deleteProductById(id){
    return axios.delete(`http://localhost:8080/products/${id}`);
}
