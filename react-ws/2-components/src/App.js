import React from 'react';
import Greet from './components/Greet';
import Product from './components/Product';
import Box from './components/Box';
const App = () => {
  return (
    <div className="container">
      <h1>App Component</h1>
      <hr/>
      <Greet/>
      <Product/>
    
    </div>
  )

};

export default App;