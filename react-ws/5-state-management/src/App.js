import {useState} from 'react';

const App = () => {

   let[counter,setCounter]=useState(0);
   let[evenCounter,setEvenCounter]=useState(0)
   let[personName,setPersonName]=useState('');


  function incrementCounter(){
    setCounter(counter+1);
  }

  function readName(s1){
    //console.log(s1.target.value);
    setPersonName(s1.target.value);
  }

  return (
    <div className='container'>
      <h1>State Management</h1> <hr/>
      <h2>Counter: {counter}</h2>
      <button onClick={incrementCounter}>Increment</button>
      <br/>
      <h2>Even Counter: {evenCounter}</h2>
      <button onClick={()=>setEvenCounter(evenCounter+2)}>Even Counter</button> 

      <hr/>
      Name: <input onKeyUp={(e)=>readName(e)}/>
      <hr/>
      <h2>Typed: {personName} </h2>

      
    </div>
  );
};

export default App;