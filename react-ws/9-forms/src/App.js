import React from 'react';
import ReactForm from './ReactForm';
import ProductForm from './ProductForm';

const App = () => {
  let status=false;
  return (
    <div className='container'>
     
      {status?<ReactForm/>:null}

      <ProductForm/>
      
    </div>
  );
};

export default App;