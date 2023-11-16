import React from 'react';
import Greet from './components/Greet';
import Product from './components/Product';

const App = (props) => {

  let time=new Date().toLocaleTimeString('en-US');

  let product={id:10,name:'Pen',price:653}

  let products=[
    {id:10,name:'Pen',price:653},
    {id:11,name:'Laptop',price:56000},
    {id:12,name:'Mouse',price:1200},
    {id:13,name:'Keybord',price:3400},
    {id:14,name:'Mobile',price:34000},
  ]



  //let appName=props.title;
  let {title,version}=props;

  return (
    <div className='container'>
      <h1> {title} - {version}  </h1> <hr/>

      <Greet msg='Good Evening' time={time}/>
      <Product product={product} products={products}/>

    </div>
  );


};

export default App;