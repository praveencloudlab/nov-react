import React from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import { MyProvider } from './MyProvider';

const App = () => {
  return (
    <div className='container'>

      <h1>useContext Demo</h1> <hr/>

      <MyProvider>
         <ComponentA/>
         <ComponentB/>
      </MyProvider>

      
      
    </div>
  );
};

export default App;