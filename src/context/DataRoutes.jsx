import { createContext } from "react";
import { useLocation } from "react-router-dom";

export const DataRoutesContext = createContext();

const DataRoutesProvider = ({ children }) => {

    const {pathname} = useLocation()
   


  return (
    <>
      <DataRoutesContext.Provider value={{pathname}}>
        {children}
      </DataRoutesContext.Provider>
    </>
  );
};

export default DataRoutesProvider;
