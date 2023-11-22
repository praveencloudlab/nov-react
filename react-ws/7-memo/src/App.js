import {useState,useMemo} from 'react';

const App = () => {
  const[number,setNumber] = useState(0);

  const handleNumberChange=(e)=>{
    setNumber(e.target.value);
  }

  const square=useMemo(()=>{
    return number*number;
  },[number])


  return (
    <div className='container'>

      <h1>useMemo Demo</h1> <hr/>

      <div>
        <label>Enter a Number</label>
        <input 
            type="number" 
            id='number' 
            value={number}
            onChange={handleNumberChange}
          />
      </div>
      <div>
        <h2>Square of number is {square}</h2>
      </div>
    </div>
  );
};

export default App;