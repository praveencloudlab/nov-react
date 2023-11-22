import { useMyContext } from "./MyProvider";

const ComponentA = () => {

    const sharedData=useMyContext();
    
    return (
        <div>
            <h1>Component-A</h1> 
            <h2>Shared Data: {sharedData}</h2>  
        </div>
    );
};

export default ComponentA;