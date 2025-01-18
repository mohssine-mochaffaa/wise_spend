import axios from 'axios';
import React, { createContext, useContext, useLayoutEffect, useState } from 'react';

const ContextPage = createContext();

export const ContextPageProvider = ({ children }) => {
  const [log, setLog] = useState(false);
  const [user,setUser] = useState(null);
  const apiUrl = "http://localhost:3001";



  return (
    <ContextPage.Provider value={{apiUrl,user,setUser}}>
      {children}
    </ContextPage.Provider>   
  ); 
};
  
export const useMyContext = () => {
  return useContext(ContextPage); 
};
