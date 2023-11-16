import React from 'react';

const Greet = (props) => {

    let{msg,time} = props;
    
    return (
        <div>
            <h1>{msg}</h1>
            <h2>Time: {time}</h2>
        </div>
    );
};

export default Greet;