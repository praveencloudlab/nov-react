import React from 'react';
import NavBar from './NavBar';
import { Routes,Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import Welcome from './Welcome';

import Login from './Login';
import NotFound from './NotFound';

const Home = () => {
    return (
        <div>

             <div className='row'>
                <div className='col-3'>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <Link class="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                         <Link class="nav-link" to="/products">Products</Link>
                    </li>
                    <li class="nav-item">
                         <Link class="nav-link" to="/add-product">Save</Link>
                    </li>
                </ul>
                  
                </div>

                <div className='col-9'>
                    
                    <Routes>
                        <Route path="/" element={<Welcome/>}/>
                        <Route path="products" element={<ProductList/>}/>
                        <Route path="add-product" element={<ProductForm/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="*" element={<NotFound/>}/>

                    </Routes>

                </div>
             </div>
            
        </div>
    );
};

export default Home;