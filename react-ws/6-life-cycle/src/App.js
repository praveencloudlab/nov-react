import {useState,useEffect} from 'react';

const Greret=()=>{
  return(
    <div className='bg-info'xs>
      <h1>Good Evening!</h1>
    </div>
  )
}


const App = () => {

  const[evenNumber,setEvenNumber]=useState(0);
  const[oddNumber,setOddNumber]=useState(1);
  const[counter,setCounter]=useState(0);
  const[status,setStatus]=useState(true)

  useEffect(()=>{
    console.log(">>1- useEffect - only once");
   
  },[]);

  useEffect(()=>{
    console.log(">>clearn up code before unmound");
    return()=>{
      console.log(">> Some Component is Unmounted/removed");
    }
  },[status]);

  useEffect(()=>{
    console.log(">>useEffect-every time any state.");
  });

  useEffect(()=>{
    console.log(">>useEffect- eveNumber updated.");
  },[evenNumber])
  
  useEffect(()=>{
    console.log(">>useEffect- oddNumber updated.");
  },[oddNumber])



  useEffect(()=>{
    console.log(">>useEffect- oddNumber/evenNumber updated.");
  },[oddNumber,evenNumber])



  return (
    <div className='container'>
    <h1>React life cycle hooks -
  
          {status?<Greret/>:null}
      
         
         </h1>
      <hr/>
      <h2>Even: {evenNumber}</h2>
      <h2>Odd: {oddNumber}</h2>
      <h2>Counter: {counter}</h2>
      <button onClick={()=>setEvenNumber(evenNumber+2)}>Even-Increment</button>
      <button onClick={()=>setOddNumber(oddNumber+2)}>Odd-Increment</button>
      <hr/>
      <button onClick={()=>setCounter(counter+1)}>+</button>
      <button onClick={()=>setCounter(counter-1)}>-</button>
      <button onClick={()=>setStatus(false)}>Remove Greeting</button>



      
    </div>
  );
};

export default App;