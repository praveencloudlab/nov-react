
import {useContext,createContext} from 'react';

const MyContext=createContext() 

export const useMyContext=()=>{
    return useContext(MyContext);
}

export const MyProvider = ({children}) => {
     const sharedData='This is shared data';
    return (
        
            <MyContext.Provider value={sharedData}>
                    {children}
            </MyContext.Provider>
    );
};

