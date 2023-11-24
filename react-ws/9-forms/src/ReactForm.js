import {useState} from 'react';

const ReactForm = () => {
    const[person,setPerson]=useState({name:'',age:0,address:''});

  let handleInput=(e)=>{
     // console.log(e.target.name);
      
        let {name,value}=e.target;
        setPerson({...person,[name]:value})
       // console.log(name+" and "+value);


      //let obj=Object.assign({name:value});
      //console.log(obj);
      //setPerson({key:e.target.value});
  }

  let handleSubmit=(e)=>{
    e.preventDefault();
    console.log(JSON.stringify(person));
  }

  return (
    <div className='container'>
      <h1>Forms Demo</h1> <hr/>

     <form onSubmit={(e)=>handleSubmit(e)}>
      <div>
        <input type="text" name="name" onChange={handleInput}/><br/>
        <input type="text" name="age" onChange={handleInput}/> <br/>
        <input type="text" name="address" onChange={handleInput}/> <br/>
        <button>Save</button>
        <h2>{JSON.stringify(person)}</h2>

      </div>
      </form>
      
    </div>
  );
};

export default ReactForm;