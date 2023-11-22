import React from 'react';
import { useMyContext } from './MyProvider';

const ComponentB = () => {
    const sharedData=useMyContext();
    return (
        <div>

            <h1>Component - B</h1>
            <h2>Shared Data: {sharedData}</h2>  
            
        </div>
    );
};

export default ComponentB;