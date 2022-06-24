import { createContext } from "react";
const CampContext = createContext();

function CampContextProvider({children}) {
    return ( 

    <CampContext.Provider
    value={{cat:"foam"}}
    >
    
        {children}
    </CampContext.Provider>  

     );


    
}



export {CampContext, CampContextProvider} 
